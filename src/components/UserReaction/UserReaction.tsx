import styles from "./UserReaction.module.css";

export default function UserReaction() {
  return (
    <div className={styles.reaction_container}>
      <img
        className={styles.reaction}
        src="\assets\static\svgs\hand_down.svg"
        alt="hand_down"
      />
      <img
        className={styles.reaction}
        src="\assets\static\svgs\hand_up.svg"
        alt="hand_up"
      />
      <img
        className={styles.reaction}
        src="\assets\static\svgs\more_vert.svg"
        alt="more"
      />
    </div>
  );
}
