import styles from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem.tsx";

type Props = {
  size: string;
};

//This functun accepts "compact" and "spanded" parameters
export default function SideBar({ size = "compact" }: Props) {
  const sizeTarget =
    size === "compact" ? "compact" : size === "spanded" ? "spanded" : "compact";

  if (sizeTarget === "compact") {
    return (
      <div className={styles.navBar_container}>
        <div className={styles.compact_sidebar}>
          <MenuItem
            primarytext="Principal"
            buttonSize={"vertically"}
            leftIconUrl="src/assets/static/svgs/house.svg"
            isSelected
          />
          <MenuItem
            primarytext="Explorar"
            buttonSize={"vertically"}
            leftIconUrl="src/assets/static/svgs/explore.svg"
          />
          <MenuItem
            primarytext="Biblioteca"
            buttonSize={"vertically"}
            leftIconUrl="src/assets/static/svgs/library_music.svg"
          />
        </div>
      </div>
    );
  }
}
