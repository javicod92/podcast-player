import styles from "./MediaControls.module.css";
import { audioTypes } from "../Logic/audioTypes";

type Props = {
  currentSong: audioTypes | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  handleNextAudio(): void;
  handlePreviousAudio(): void;
};

export default function MediaControls(props: Props) {
  function convertAudioTime(time: number) {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = Math.floor(time % 60);
    return `${minutes}:${remainingSeconds}`;
  }

  return (
    <div className={styles.media_container}>
      <button id="previous_button" onClick={props.handlePreviousAudio}>
        <img src="/assets/static/svgs/skip_previous.svg" alt="previous" />
      </button>
      <button id="button_play" onClick={props.onPlayPause}>
        <img
          src={
            props.isPlaying
              ? "/assets/static/svgs/pause.svg"
              : "/assets/static/svgs/play_arrow.svg"
          }
          alt="play/pause"
        />
      </button>
      <button id="next_button" onClick={props.handleNextAudio}>
        <img src="/assets/static/svgs/skip_next.svg" alt="next" />
      </button>
      {props.currentSong?.duration && (
        <span className={styles.media_time}>
          0:00 / {convertAudioTime(props.currentSong.duration)}
        </span>
      )}
    </div>
  );
}
