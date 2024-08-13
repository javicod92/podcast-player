import styles from "./SoundFunction.module.css";

export default function SoundFunction() {
  return (
    <div className={styles.function_container}>
      <img src="src\assets\static\svgs\repeat.svg" alt="Repeat" />
      <img src="src\assets\static\svgs\volume_up.svg" alt="Volume" />
      <img src="src\assets\static\svgs\arrow_drop_down.svg" alt="Drop Down" />
    </div>
  );
}
