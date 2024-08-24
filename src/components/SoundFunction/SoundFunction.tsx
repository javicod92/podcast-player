import styles from "./SoundFunction.module.css";

export default function SoundFunction() {
  return (
    <div className={styles.function_container}>
      <button>
        <img
          className={styles.function_img}
          src="src\assets\static\svgs\repeat.svg"
          alt="Repeat"
        />
      </button>
      <button>
        <img
          className={styles.function_img}
          src="src\assets\static\svgs\volume_up.svg"
          alt="Volume"
        />
      </button>
      <button>
        <img
          className={styles.function_img}
          src="src\assets\static\svgs\arrow_drop_down.svg"
          alt="Drop Down"
        />
      </button>
    </div>
  );
}
