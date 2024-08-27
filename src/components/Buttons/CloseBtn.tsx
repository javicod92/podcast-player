import styles from "./CloseBtn.module.css";

type Props = {
  handlButton: () => void;
};

export default function CloseBtn(props: Props) {
  return (
    <button
      className={styles.closeButton}
      title="Cerrar"
      onClick={props.handlButton}
    >
      <img src="src/assets/static/svgs/x.svg" alt="Close" />
    </button>
  );
}
