import styles from "./Buttons.module.css";

type Props = {
  text: string;
  iconUrl?: string;
  isSelected?: true;
  type: "button" | "submit";
  onClickFn?: () => void;
};

export default function Buttons(props: Props) {
  return (
    <button
      onClick={props.onClickFn}
      type={props.type}
      className={`${styles.button_container} ${
        props.isSelected && styles.isSelected
      }`}
    >
      <div className={styles.info_container}>
        {props.iconUrl && <img src={props.iconUrl} alt="Icon Button" />}
        <p>{props.text}</p>
      </div>
    </button>
  );
}
