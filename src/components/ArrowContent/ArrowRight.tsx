import styles from "./ArrowRight.module.css";

type Props = {
  isSelected: boolean;
};

export default function ArrowRight(props: Props) {
  const src: string = props.isSelected
    ? "/assets/static/svgs/selected_arrow_right.svg"
    : "/assets/static/svgs/unselected_arrow_right.svg";

  return (
    <button className={styles.arrow_right}>
      <img src={src} alt="Arrow Right" />
    </button>
  );
}
