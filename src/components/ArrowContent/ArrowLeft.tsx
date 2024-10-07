import styles from "./ArrowLeft.module.css";

type Props = {
  isSelected: boolean;
};

export default function ArrowLeft(props: Props) {
  const src: string = props.isSelected
    ? "/assets/static/svgs/selected_arrow_left.svg"
    : "/assets/static/svgs/unselected_arrow_left.svg";

  return (
    <button className={styles.arrow_left}>
      <img src={src} alt="Arrow Left" />
    </button>
  );
}
