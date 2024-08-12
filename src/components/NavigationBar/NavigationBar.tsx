import styles from "./NavigationBar.module.css";
import MenuItem from "../MenuItem/MenuItem.tsx";

type Props = {
  size: string;
};

//This functun accepts "compact" and "spanded" parameters
export default function NavigationBar({ size = "compact" }: Props) {
  const sizeTarget =
    size === "compact" ? "compact" : size === "spanded" ? "spanded" : "compact";

  if (sizeTarget === "compact") {
    return (
      <div className={styles.navBar_container}>
        <div className={styles.compact_sidebar}>
          <MenuItem
            type="vertically"
            iconUrl="/src/assets/static/svgs/other_houses.svg"
            isFocused={true}
          >
            Principal
          </MenuItem>
          <MenuItem
            type="vertically"
            iconUrl="/src/assets/static/svgs/explore.svg"
            isFocused={false}
          >
            Explorar
          </MenuItem>
          <MenuItem
            type="vertically"
            iconUrl="/src/assets/static/svgs/library_music.svg"
            isFocused={false}
          >
            Biblioteca
          </MenuItem>
        </div>
      </div>
    );
  }
}
