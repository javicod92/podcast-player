import styles from "./MediaControls.module.css";
import { SongContext } from "../../contexts/PlaybackProvider";
import { useContext } from "react";

export default function MediaControls() {
  const songContext = useContext(SongContext);

  function convertAudioTime(time: number) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    } else {
      return `${minutes}:${String(seconds).padStart(2, "0")}`;
    }
  }

  return (
    <div className={styles.media_container}>
      <button id="previous_button" onClick={songContext?.handlePreviousAudio}>
        <img src="/assets/static/svgs/skip_previous.svg" alt="previous" />
      </button>
      <button id="button_play" onClick={songContext?.handlePlayPause}>
        <img
          src={
            songContext?.isPlaying
              ? "/assets/static/svgs/pause.svg"
              : "/assets/static/svgs/play_arrow.svg"
          }
          alt="play/pause"
        />
      </button>
      <button id="next_button" onClick={songContext?.handleNextAudio}>
        <img src="/assets/static/svgs/skip_next.svg" alt="next" />
      </button>
      {songContext?.currentSong?.duration && (
        <span className={styles.media_time}>
          {convertAudioTime(songContext?.elapsedTime)} /{" "}
          {convertAudioTime(songContext?.currentSong.duration)}
        </span>
      )}
    </div>
  );
}
