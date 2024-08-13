import styles from "./PlaybackBar.module.css";
import MediaControls from "../MediaControls/MediaControls.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import SoundFunction from "../SoundFunction/SoundFunction.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx"

export default function PlaybackBar() {
  return (
    <div className={styles.playBar_content}>
      <div className={styles.inner_container}>
        <ProgressBar />
        <MediaControls />
        <SongCard
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
