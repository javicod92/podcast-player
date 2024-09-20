import styles from "./MediaControls.module.css";

type Props = {
  isPlaying: boolean;
  onPlayPause: () => void;
};

export default function MediaControls(props: Props) {
  return (
    <div className={styles.media_container}>
      <button id="previous_button">
        <img src="/src/assets/static/svgs/skip_previous.svg" alt="previous" />
      </button>
      <button id="button_play" onClick={props.onPlayPause}>
        <img
          src={
            props.isPlaying
              ? "src/assets/static/svgs/pause.svg"
              : "/src/assets/static/svgs/play_arrow.svg"
          }
          alt="play/pause"
        />
      </button>
      <button id="next_button">
        <img src="/src/assets/static/svgs/skip_next.svg" alt="next" />
      </button>
      <span className={styles.media_time}>0:10 / 3:41</span>
    </div>
  );
}
