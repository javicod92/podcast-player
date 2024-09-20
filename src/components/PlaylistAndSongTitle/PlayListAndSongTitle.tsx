import styles from "./PlayListAndSongTitle.module.css";
import convertNumber from "../Logic/convertNumber.ts";

type Props = {
  isAlbum: boolean;
  primaryText: string;
  secondaryText?: string;
  songs?: number;
  views?: number;
};

export default function PlayListAndSongTitle(props: Props) {
  const transformTotalSongs = convertNumber(props.songs || 0);
  const transformTotalViews = convertNumber(props.views || 0);

  if (props.isAlbum) {
    return (
      <div className={styles.albumTitle_container}>
        <h2>{props.primaryText}</h2>
        <p>
          {props.secondaryText ? props.secondaryText : "Sin descripción"}{" "}
          {props.songs && " • " + transformTotalSongs + "songs"}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.albumTitle_container}>
      <h2>
        {props.primaryText.length > 40
          ? props.primaryText.slice(0, 40) + "..."
          : props.primaryText}
      </h2>
      <p>
        {props.secondaryText
          ? props.secondaryText.length > 40
            ? props.secondaryText.slice(0, 40) + "..."
            : props.secondaryText
          : "Sin descripción"}{" "}
        {props.views && " • " + transformTotalViews + "views"}
      </p>
    </div>
  );
}
