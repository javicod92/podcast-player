import styles from "./MediaControls.module.css";

export default function MediaControls() {
  return (
    <div className={styles.media_container}>
      <button id="previous_button">
        <img src="/assets/static/svgs/skip_previous.svg" alt="previous" />
      </button>
      <button id="button_play">
        <img src="/assets/static/svgs/play_arrow.svg" alt="play/pause" />
      </button>
      <button id="next_button">
        <img src="/assets/static/svgs/skip_next.svg" alt="next" />
      </button>
      <span className={styles.media_time}>0:10 / 3:41</span>
    </div>
  );
}
