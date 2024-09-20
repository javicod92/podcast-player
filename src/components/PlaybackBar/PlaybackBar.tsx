import styles from "./PlaybackBar.module.css";
import MediaControls from "../MediaControls/MediaControls.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import SoundFunction from "../SoundFunction/SoundFunction.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx";

type Props = {
  isPlaying: boolean;
  onPlayPause: () => void;
};

export default function PlaybackBar(props: Props) {
  return (
    <div className={styles.playBar_content}>
      <div className={styles.inner_container}>
        <ProgressBar />
        <MediaControls
          isPlaying={props.isPlaying}
          onPlayPause={props.onPlayPause}
        />
        <SongCard
          size="large"
          songTitle="Can't Stop the Feeling!"
          artist="Calvin Harris"
          views={37000}
          likes={603}
          imageUrl="/src/assets/static/images/albumsImage/3b02630be867dbdbd629e9d32572a9b5.png"
        />
        <SoundFunction />
      </div>
    </div>
  );
}

//TODO: Complete code and add new conditional rendering
