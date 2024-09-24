import styles from "./SongAlbum.module.css";
import PlayListAndSongTitle from "../PlaylistAndSongTitle/PlayListAndSongTitle.tsx";

type Props = {
  id: number;
  isAlbum: boolean;
  imageSource?: string;
  secondaryText?: string;
  primaryText: string;
  audioSrc: string;
  songs?: number;
  views?: number;
  onSongSelect: () => void;
  isPlaying: boolean;
};

export default function SongAlbum(props: Props) {
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
      <div className={styles.songAlbum_container} onClick={props.onSongSelect}>
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
      </div>
    );
  }
}
