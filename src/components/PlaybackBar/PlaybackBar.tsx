import styles from "./PlaybackBar.module.css";
import MediaControls from "../MediaControls/MediaControls.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import SoundFunction from "../SoundFunction/SoundFunction.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx";
import { SongContext } from "../../contexts/PlaybackProvider";
import { useContext } from "react";

export default function PlaybackBar() {
  const songContext = useContext(SongContext);

  return (
    <div className={styles.playBar_content}>
      <div className={styles.inner_container}>
        <ProgressBar />
        <MediaControls />
        {songContext?.currentSong && (
          <SongCard
            id={songContext.currentSong.id}
            size="large"
            primaryText={songContext.currentSong.title}
            secondaryText={songContext.currentSong.description}
            views={37000}
            likes={603}
            imageUrl={songContext.currentSong.channel.urls.logo_image.original}
            imageAlternative={
              songContext.currentSong.user.urls.profile_image.original
            }
          />
        )}
        <SoundFunction />
      </div>
    </div>
  );
}
