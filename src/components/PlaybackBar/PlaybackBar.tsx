import styles from "./PlaybackBar.module.css";
import MediaControls from "../MediaControls/MediaControls.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import SoundFunction from "../SoundFunction/SoundFunction.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx";

type Props = {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentSong: audioTypes | null;
};

type audioTypes = {
  id: number;
  imageSource?: string;
  secondaryText?: string;
  primaryText: string;
  songs?: number;
  views?: number;
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
        {props.currentSong && (
          <SongCard
            id={props.currentSong.id}
            size="large"
            primaryText={props.currentSong.primaryText}
            secondaryText={props.currentSong.secondaryText}
            views={37000}
            likes={603}
            imageUrl={props.currentSong.imageSource}
          />
        )}
        <SoundFunction />
      </div>
    </div>
  );
}

//TODO: Complete code and add new conditional rendering
