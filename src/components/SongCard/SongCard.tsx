import styles from "./SongCard.module.css";
import convertNumber from "../Logic/convertNumber.ts";
import UserReaction from "../UserReaction/UserReaction.tsx";

type Props = {
  size: "small" | "medium" | "large";
  imageUrl: string;
  songTitle: string;
  artist: string;
  views?: number;
  likes?: number;
};

const className = {
  small: "songCard_container_default",
  medium: "songCard_container_medium",
  large: "songCard_container_large",
};

export default function SongCard(props: Props) {
  return (
    <div className={styles[className[props.size]]}>
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
              ` • ${convertNumber(props.views || 0)} views • ${convertNumber(
                props.likes || 0
              )} likes`}
          </p>
        </div>
        {props.size != "small" && <UserReaction />}
      </div>
    </div>
  );
}
