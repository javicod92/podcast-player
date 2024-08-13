import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  return (
    <div className={styles.progresBar_container}>
      <input onChange={ProgressBar}
        className={styles.progressRange}
        type="range"
        id="progressRange"
        min="0"
        max="100"
        value="0"
        step="1"
      />
    </div>
  );
}
