import styles from "./SongCard.module.css";
import convertNumber from "../Logic/convertNumber.ts";
import UserReaction from "../UserReaction/UserReaction.tsx";

type Props = {
  size: "smallest" | "small" | "medium" | "large";
  imageUrl: string;
  primaryText: string;
  secondaryText: string;
  views?: number;
  likes?: number;
};

const className = {
  smallest: "songCard_container_smallest",
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
            {props.secondaryText?.length > 10
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
    </div>
  );
}
