import styles from "./SongCard.module.css";
import convertNumber from "../Logic/convertNumber.ts";
import UserReaction from "../UserReaction/UserReaction.tsx";

type Props = {
  size: string;
  imageUrl: string;
  songTitle: string;
  artist: string;
  views: number;
  likes: number;
};

SongCard.defaultProps = {
  size: "default",
};

export default function SongCard(props: Props) {
  return (
    <div
      className={
        props.size === "small"
          ? styles.songCard_container_default
          : props.size === "medium"
          ? styles.songCard_container_medium
          : styles.songCard_container_large
      }
    >
      <img
        src={props.imageUrl}
        alt="Artist Album"
        className={styles.artist_image}
      />
      <div className={styles.artist_description}>
        <div className={styles.description_text}>
          <p className={styles.songTitle}>{props.songTitle}</p>
          <p className={styles.artistDescription}>
            {props.artist}{" "}
            {(props.size === "small" || props.size === "medium") &&
              " • Listen Again"}{" "}
            {props.size === "large" &&
              ` • ${convertNumber(props.views)} views • ${convertNumber(
                props.likes
              )} likes`}
          </p>
        </div>
        {props.size != "small" && <UserReaction />}
      </div>
    </div>
  );
}
