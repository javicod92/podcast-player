import style from "./menuItem.module.css";
import { ReactNode } from "react";

type Props = {
  item: string;
  focused: boolean;
  children: ReactNode;
};

export default function MenuItem(props: Props) {
  return (
    <div
      className={`${style.item_content} ${
        props.focused ? style.focused : null
      }`}
    >
      {props.children}
      <p>{props.item}</p>
    </div>
  );
}
