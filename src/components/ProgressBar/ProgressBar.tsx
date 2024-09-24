import styles from "./ProgressBar.module.css";

type Props = {
  progress: number;
  onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProgressBar(props: Props) {
  return (
    <div className={styles.progresBar_container}>
      <input
        onChange={props.onProgressChange}
        className={styles.progressRange}
        type="range"
        id="progressRange"
        min="0"
        max="100"
        value={props.progress}
        step=".1"
      />
    </div>
  );
}
