import styles from "./SongAlbum.module.css";
import PlayListAndSongTitle from "../PlaylistAndSongTitle/PlayListAndSongTitle.tsx";

type Props = {
  id: number;
  isAlbum: boolean;
  imageSource?: string;
  imageAlternative: string;
  secondaryText?: string;
  primaryText: string;
  audioSrc: string;
  songs?: number;
  views?: number;
  onSongSelect: () => void;
  isPlaying: boolean;
};

type ImageContainerProps = {
  imageSource?: string;
  imageAlternative: string;
  isAlbum: boolean;
  isPlaying: boolean;
  onSongSelect?: () => void;
};

function ImageContainer(props: ImageContainerProps) {
  return (
    <div className={styles.image_container} onClick={props.onSongSelect}>
      <img
        className={
          props.isAlbum ? styles.albumImage : styles.albumImage_landScape
        }
        src={props.imageSource || props.imageAlternative}
        alt="Album Photo"
      />
      <img
        className={styles.albumPlay}
        src={
          props.isPlaying
            ? "/assets/static/svgs/pause.svg"
            : "/assets/static/svgs/play_circle.svg"
        }
        alt="Play Circle"
      />
    </div>
  );
}

export default function SongAlbum(props: Props) {
  return (
    <div className={styles.songAlbum_container}>
      <ImageContainer
        imageSource={props.imageSource}
        imageAlternative={props.imageAlternative}
        isAlbum={props.isAlbum}
        isPlaying={props.isPlaying}
        onSongSelect={props.isAlbum ? undefined : props.onSongSelect}
      />
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
