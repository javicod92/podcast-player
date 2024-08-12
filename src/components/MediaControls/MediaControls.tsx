import styles from "./MediaControls.module.css"

export default function MediaControls () {
  return (
    <div className={styles.media_container}>
      <img src="/src/assets/static/svgs/skip_previous.svg" alt="previous" />
      <img src="/src/assets/static/svgs/play_arrow.svg" alt="play/pause"/>
      <img src="/src/assets/static/svgs/skip_next.svg" alt="next" />
      <span>0:10 / 3:41</span>
    </div>
  )
}