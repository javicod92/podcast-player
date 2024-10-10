import { ChangeEvent, ComponentProps } from "react";
import styles from "./UserInput.module.css";

type ItemList = {
  title: string;
  description: string;
  imageUrl: string;
};

type Props = ComponentProps<"input"> & {
  label: string;
  handleChange: React.Dispatch<React.SetStateAction<ItemList>>;
};

export default function UserInput({
  label,
  handleChange,
  ...delegated
}: Props) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={delegated.id}>{label}</label>
      <input
        {...delegated}
        className={styles.input_element}
        type="text"
        onChange={onChange}
      />
    </div>
  );
}
