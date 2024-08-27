import styles from "./CloseBtn.module.css"


export default function CloseBtn () {
  return (
    <button className={styles.closeButton} title="Cerrar">
      <img src="src/assets/static/svgs/x.svg" alt="Close" />
    </button>
  )
}