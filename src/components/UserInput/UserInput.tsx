import { ChangeEvent, useState } from "react";
import styles from "./UserInput.module.css";

type Props = {
  placeHolder: string;
  inputId: string;
  text: string;
};

export default function UserInput(props: Props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
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
        onChange={handleChange}
        value={inputValue}
        required
      />
    </div>
  );
}
