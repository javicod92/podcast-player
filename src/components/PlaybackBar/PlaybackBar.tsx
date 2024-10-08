import styles from "./PlaybackBar.module.css";
import MediaControls from "../MediaControls/MediaControls.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import SoundFunction from "../SoundFunction/SoundFunction.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx";
import { audioTypes } from "../Logic/audioTypes.ts";

type Props = {
  currentSong: audioTypes | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  progress: number;
  onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextAudio(): void;
  handlePreviousAudio(): void;
  elapsedTime: number;
};

export default function PlaybackBar(props: Props) {
  return (
    <div className={styles.playBar_content}>
      <div className={styles.inner_container}>
        <ProgressBar
          progress={props.progress}
          onProgressChange={props.onProgressChange}
        />
        <MediaControls
          currentSong={props.currentSong}
          isPlaying={props.isPlaying}
          onPlayPause={props.onPlayPause}
          handleNextAudio={props.handleNextAudio}
          handlePreviousAudio={props.handlePreviousAudio}
          elapsedTime={props.elapsedTime}
        />
        {props.currentSong && (
          <SongCard
            id={props.currentSong.id}
            size="large"
            primaryText={props.currentSong.title}
            secondaryText={props.currentSong.description}
            views={37000}
            likes={603}
            imageUrl={props.currentSong.channel.urls.logo_image.original}
            imageAlternative={
              props.currentSong.user.urls.profile_image.original
            }
          />
        )}
        <SoundFunction />
      </div>
    </div>
  );
}

//TODO: Complete code and add new conditional rendering
