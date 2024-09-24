import styles from "./PlaybackBar.module.css";
import MediaControls from "../MediaControls/MediaControls.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import SoundFunction from "../SoundFunction/SoundFunction.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx";

type Props = {
  currentSong: audioTypes | null;
  isPlaying: boolean;
  onPlayPause: () => void;
};

type audioTypes = {
  id: number;
  title: string;
  description: string;
  user: {
    urls: {
      profile_image: {
        original: string;
      };
    };
  };
  channel: {
    urls: {
      logo_image: {
        original: string;
      };
    };
  };
  urls: {
    high_mp3: string;
  };
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
