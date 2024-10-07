import { useEffect, useRef } from "react";
import styles from "./ProgressBar.module.css";

type Props = {
  progress: number;
  onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProgressBar(props: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function updateProgressBar() {
      if (inputRef.current) {
        const value = Number(inputRef.current.value);
        const min = Number(inputRef.current.min);
        const max = Number(inputRef.current.max);
        const percentage = ((value - min) / (max - min)) * 100;

        inputRef.current.style.background = `linear-gradient(to right, red ${percentage}%, #555 ${percentage}%)`;
      }
    }

    updateProgressBar();
  }, [props.progress]);

  return (
    <div className={styles.progresBar_container}>
      <input
        ref={inputRef}
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
