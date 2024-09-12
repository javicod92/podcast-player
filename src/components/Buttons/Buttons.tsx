import styles from "./Buttons.module.css";

type Props = {
  disabled?: boolean;
  text: string;
  iconUrl?: string;
  isSelected?: true;
  type: "button" | "submit";
  onClickFn?: () => void;
};

export default function Buttons(props: Props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClickFn}
      type={props.type}
      className={`${styles.button_container} ${
        props.isSelected && styles.isSelected
      } ${props.disabled && styles.isDisabled}`}
    >
      <div className={styles.info_container}>
        {props.iconUrl && <img src={props.iconUrl} alt="Icon Button" />}
        <p>{props.text}</p>
      </div>
    </button>
  );
}
