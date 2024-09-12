import { ChangeEvent } from "react";
import styles from "./UserInput.module.css";

type Props = {
  name: string;
  placeHolder: string;
  inputId: string;
  text: string;
  handlChange: React.Dispatch<React.SetStateAction<ItemList>>;
  value: string;
};

type ItemList = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function UserInput(props: Props) {
  const handlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    props.handlChange((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={props.inputId}>{props.text}</label>
      <input
        name={props.name}
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
