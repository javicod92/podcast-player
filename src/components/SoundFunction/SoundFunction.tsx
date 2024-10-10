import { useContext } from "react";
import styles from "./SoundFunction.module.css";
import { SongContext } from "../../contexts/PlaybackProvider";

export default function SoundFunction() {
  const songContext = useContext(SongContext);

  return (
    <div className={styles.function_container}>
      <button>
        <img
          className={styles.function_img}
          src="\assets\static\svgs\repeat.svg"
          alt="Repeat"
          title="Repeat"
        />
      </button>
      <button>
        <img
          className={styles.function_img}
          src="\assets\static\svgs\volume_up.svg"
          alt="Volume"
          title="Volume"
        />
      </button>
      <button onClick={songContext?.handleDisablePlaybackBar} title="Close">
        <img
          className={styles.function_img}
          src="\assets\static\svgs\arrow_drop_down.svg"
          alt="Drop Down"
        />
      </button>
    </div>
  );
}
