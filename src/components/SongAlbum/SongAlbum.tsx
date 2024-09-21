import styles from "./SongAlbum.module.css";
import PlayListAndSongTitle from "../PlaylistAndSongTitle/PlayListAndSongTitle.tsx";
import { useEffect, useRef } from "react";

type Props = {
  id: number;
  isAlbum: boolean;
  imageSource?: string;
  secondaryText?: string;
  primaryText: string;
  audioSrc: string;
  songs?: number;
  views?: number;
  handleClick: () => void;
  isPlaying: boolean;
  isCurrentSong: boolean;
};

export default function SongAlbum(props: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  //This effect is used to play or pause the song if it is currently selected
  useEffect(() => {
    if (audioRef.current) {
      if (props.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [props.isPlaying]);

  //This effect is used to restart the song in case it is a new one
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, [props.isCurrentSong]);

  if (props.isAlbum) {
    return (
      <div className={styles.songAlbum_container}>
        <div className={styles.image_container}>
          <img
            className={styles.albumImage}
            src={
              props.imageSource
                ? props.imageSource
                : "src/assets/static/images/errorImages/NoAlbumOrSong.webp"
            }
            alt="Album Photo"
          />
          <img
            className={styles.albumPlay}
            src="src/assets/static/svgs/play_circle.svg"
            alt="Paly Circle"
          />
        </div>
        <div className={styles.album_text}>
          <PlayListAndSongTitle
            isAlbum={props.isAlbum}
            primaryText={props.primaryText}
            secondaryText={props.secondaryText}
            songs={props.songs}
            views={props.views}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.songAlbum_container} onClick={props.handleClick}>
        <div className={styles.image_container}>
          <img
            className={styles.albumImage_landScape}
            src={
              props.imageSource
                ? props.imageSource
                : "src/assets/static/images/errorImages/NoAlbumOrSong.webp"
            }
            alt="Album Photo"
          />
          <img
            className={styles.albumPlay}
            src={
              props.isPlaying
                ? "src/assets/static/svgs/pause.svg"
                : "src/assets/static/svgs/play_circle.svg"
            }
            alt="Paly Circle"
          />
        </div>
        <div className={styles.album_text}>
          <PlayListAndSongTitle
            isAlbum={props.isAlbum}
            primaryText={props.primaryText}
            secondaryText={props.secondaryText}
            songs={props.songs}
            views={props.views}
          />
        </div>
        <audio src={props.audioSrc} ref={audioRef} />
      </div>
    );
  }
}
