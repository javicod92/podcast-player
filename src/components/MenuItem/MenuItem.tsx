import styles from "./MenuItem.module.css";
// import { ReactNode } from "react";

// type Props = {
//   type: string; //this property can be "vertically" or "horizontally"
//   iconUrl: string;
//   isFocused: boolean;
//   children: ReactNode;
// }

// export default function MenuItem (props: Props) {
//   const typeTarget = props.type === 'vertically' ? 'vertically' : 'horizontally';

//   if (typeTarget === 'vertically') {
//     return (
//       <button className={`${styles.vertically_button_container} ${props.isFocused ? styles.fucused : ''}`}>
//         <img src={props.iconUrl} alt="Icon"/>
//         <p className={styles.smallText}>{props.children}</p>
//       </button>
//     )
//   }
// }

//TODO: Complete horizontally function in the future - This function is completed

type Props = {
  primarytext: string;
  secondaryText?: string;
  hasRightIcon?: true;
  leftIconUrl?: string;
  buttonSize: "vertically" | "horizontally";
  isSelected?: true;
};

export default function MenuItem(props: Props) {
  return (
    <button
      className={`${
        props.buttonSize === "vertically"
          ? styles.vertically_button_container
          : styles.horizontally_button_container
      } ${props.isSelected && styles.isSelected}`}
    >
      {props.leftIconUrl && <img src={props.leftIconUrl} alt="Left Icon" />}
      <div className={styles.description_container}>
        <h2>{props.primarytext}</h2>
        {props.secondaryText && <p>{props.secondaryText}</p>}
      </div>
      {props.hasRightIcon && (
        <img src="src/assets/static/svgs/iconForMenu.svg" alt="Icon for Menu" />
      )}
    </button>
  );
}
