import styles from "./SongAlbum.module.css";
import PlayListAndSongTitle from "../PlaylistAndSongTitle/PlayListAndSongTitle.tsx";

type Props = {
  isAlbum: boolean;
  imageSource?: string;
  secondaryText?: string;
  primaryText: string;
  songs?: number;
  views?: number;
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
      <div className={styles.songAlbum_container}>
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
  }
}
