import styles from "./MenuItem.module.css"
import { ReactNode } from "react";

type Props = {
  type: string; //this property can be "vertically" or "horizontally"
  iconUrl: string;
  isFocused: boolean;
  children: ReactNode;
}

export default function MenuItem (props: Props) {
  const typeTarget = props.type === 'vertically' ? 'vertically' : 'horizontally';

  if (typeTarget === 'vertically') {
    return (
      <button className={`${styles.vertically_button_container} ${props.isFocused ? styles.fucused : ''}`}>
        <img src={props.iconUrl} alt="Icon"/>
        <p className={styles.smallText}>{props.children}</p>
      </button>
    )
  }
}

//TODO: Complete horizontally function in the future