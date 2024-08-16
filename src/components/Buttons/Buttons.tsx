import styles from "./Buttons.module.css"

type Props = {
  text: string;
}

export default function Buttons (props: Props) {
  return (
    <button className={styles.button_container}>
      <div className={styles.info_container}>
        <img src="src/assets/static/svgs/icon.svg" alt="Icon Button" />
        <p>{props.text}</p>
      </div>
    </button>
  )
}