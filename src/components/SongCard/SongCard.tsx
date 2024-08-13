import styles from "./SongCard.module.css";
import convertNumber from "../Logic/convertNumber.ts";
import UserReaction from "../UserReaction/UserReaction.tsx";

type Props = {
  imageUrl: string;
  songTitle: string;
  artist: string;
  views: number;
  likes: number;
};

export default function SongCard(props: Props) {
  return (
    <div className={styles.songCard_container}>
      <img
        src={props.imageUrl}
        alt="Artist Album"
        className={styles.artist_image}
      />
      <div className={styles.artist_description}>
        <div className={styles.description_text}>
          <p className={styles.songTitle}>{props.songTitle}</p>
          <p className={styles.artistName}>
            {props.artist} • {convertNumber(props.views)} views •{" "}
            {convertNumber(props.likes)} likes
          </p>
        </div>
        <UserReaction />
      </div>
    </div>
  );
}
