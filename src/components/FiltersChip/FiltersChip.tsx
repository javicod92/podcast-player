import styles from "./FiltersChip.module.css"

type Props = {
  text: string;
  isSelected: boolean;
}

export default function FiltersChip (props: Props) {
  return (
    <p className={`${styles.paragrap} ${styles[props.isSelected ? 'selected' : '']}`}>
      {props.text}
    </p>
  )
}