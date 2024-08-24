import styles from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem.tsx";
import Buttons from "../Buttons/Buttons.tsx";
import {userPlaylist} from "../Logic/DataBaseSimulation.ts"


type Props = {
  size: "compact" | "expanded";
};

//This functun accepts "compact" and "spanded" parameters
export default function SideBar({ size = "compact" }: Props) {

  if (size === "compact") {
    return (
      <div className={styles.sidebar_compact_fill}>
        <div className={`${styles.navBar_container} ${styles.compact_container}`}>
          <div className={styles.compact_sidebar}>
            <MenuItem
              primarytext="Principal"
              buttonSize="vertically"
              leftIconUrl="src/assets/static/svgs/house.svg"
              isSelected
            />
            <MenuItem
              primarytext="Explorar"
              buttonSize="vertically"
              leftIconUrl="src/assets/static/svgs/explore.svg"
            />
            <MenuItem
              primarytext="Biblioteca"
              buttonSize="vertically"
              leftIconUrl="src/assets/static/svgs/library_music.svg"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sidebar_expanded_fill}>
      <div className={`${styles.navBar_container} ${styles.expanded_container}`}>
        <div className={styles.expanded_sidebar}>
          <div className={styles.sidebar_content_buttons}>
            <MenuItem
              primarytext="Principal"
              buttonSize="horizontally"
              leftIconUrl="src/assets/static/svgs/house.svg"
              hasRightIcon
              isSelected
            />
            <MenuItem
              primarytext="Explorar"
              buttonSize="horizontally"
              leftIconUrl="src/assets/static/svgs/explore.svg"
            />
            <MenuItem
              primarytext="Biblioteca"
              buttonSize="horizontally"
              leftIconUrl="src/assets/static/svgs/library_music.svg"
            />
          </div>
        </div>
        <div className={styles.playList_button_container}>
          <Buttons text="Nueva Playlist" iconUrl="src/assets/static/svgs/icon.svg" isSelected/>
        </div>
        <div className={styles.playlist_list_container}>
          <div className={styles.playlist_content}>
          {userPlaylist.map(list => {
            return (
              <MenuItem 
                key={list.key}
                primarytext={list.playlistName}
                secondaryText={list.createdBy}
                buttonSize="horizontally"
              />
            )
          })}
          </div>
        </div>
      </div>
    </div>
  )
}
