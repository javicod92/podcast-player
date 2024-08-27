import { ChangeEvent } from "react";
import styles from "./UserInput.module.css";

type Props = {
  placeHolder: string;
  inputId: string;
  text: string;
  handlChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

export default function UserInput(props: Props) {
  
  const handlChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.handlChange(event.target.value);
  }

  return (
    <div className={styles.input_container}>
      <label htmlFor={props.inputId}>{props.text}</label>
      <input
        id={props.inputId}
        className={styles.input_element}
        type="text"
        placeholder={props.placeHolder}
        aria-label={props.placeHolder}
        onChange={handlChange}
        value={props.value}
        required
      />
    </div>
  );
}
