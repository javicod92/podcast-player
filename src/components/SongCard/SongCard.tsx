import styles from "./SongCard.module.css";
import convertNumber from "../Logic/convertNumber.ts";
import UserReaction from "../UserReaction/UserReaction.tsx";
import { useEffect, useRef } from "react";

type Props = {
  id: number;
  size: "smallest" | "small" | "medium" | "large";
  imageUrl?: string;
  primaryText: string;
  secondaryText?: string;
  views?: number;
  likes?: number;
  audioSrc?: string;
  handleClick?: (song: audioTypes) => void;
  isPlaying?: boolean;
  isCurrentSong?: boolean;
};

type audioTypes = {
  id: number;
  imageSource?: string;
  secondaryText?: string;
  primaryText: string;
  songs?: number;
  views?: number;
};

const className = {
  smallest: "songCard_container_smallest",
  small: "songCard_container_default",
  medium: "songCard_container_medium",
  large: "songCard_container_large",
};

export default function SongCard(props: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleClick() {
    if (props.handleClick) {
      props.handleClick({
        id: props.id,
        imageSource: props.imageUrl,
        primaryText: props.primaryText,
        secondaryText: props.secondaryText,
        songs: props.likes,
        views: props.views,
      });
    }
  }

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

  return (
    <div className={styles[className[props.size]]} onClick={handleClick}>
      <img
        src={props.imageUrl}
        alt="Artist Album"
        className={
          props.size !== "smallest"
            ? styles.artist_image
            : styles.artist_image_smallest
        }
      />
      <div className={styles.artist_description}>
        <div className={styles.description_text}>
          <p
            className={
              props.size !== "smallest"
                ? styles.songTitle
                : styles.songTitle_smallest
            }
          >
            {props.primaryText?.length > 20
              ? props.primaryText?.slice(0, 20) + "..."
              : props.primaryText}
          </p>
          <p
            className={
              props.size !== "smallest"
                ? styles.artistDescription
                : styles.artistDescription_smallest
            }
          >
            {props.secondaryText && props.secondaryText.length > 10
              ? props.secondaryText.slice(0, 10) + "..."
              : props.secondaryText}{" "}
            {props.size !== "large" && " • Listen Again"}{" "}
            {props.size === "large" &&
              ` • ${convertNumber(props.views || 0)} views • ${convertNumber(
                props.likes || 0
              )} likes`}
          </p>
        </div>
        {props.size !== "small" && props.size !== "smallest" && (
          <UserReaction />
        )}
      </div>
      {props.audioSrc && <audio src={props.audioSrc} ref={audioRef} />}
    </div>
  );
}
