import styles from "./FiltersChip.module.css";

type Props = {
  text: string;
  isSelected: boolean;
};

export default function FiltersChip(props: Props) {
  return (
    <button className={styles.button_filter}>
      <p
        className={`${styles.paragrap} ${
          styles[props.isSelected ? "selected" : ""]
        }`}
      >
        {props.text}
      </p>
    </button>
  );
}
