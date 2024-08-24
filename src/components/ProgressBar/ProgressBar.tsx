import styles from "./ProgressBar.module.css";
import { useState } from "react";

export default function ProgressBar() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className={styles.progresBar_container}>
      <input
        onChange={handleChange}
        className={styles.progressRange}
        type="range"
        id="progressRange"
        min="0"
        max="100"
        value={value}
        step=".1"
      />
    </div>
  );
}
