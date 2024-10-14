import styles from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem.tsx";
import Buttons from "../Buttons/Buttons.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import { useId } from "react";

type Props = {
  size: "compact" | "expanded";
  setIsPlaylistAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: ItemList[];
};

type ItemList = {
  title: string;
  description: string;
  imageUrl: string;
};

//This functun accepts "compact" and "spanded" parameters
export default function SideBar(props: Props) {
  const id = useId();

  //This function is used to render the “add playlist” section when the menu button is clicked
  const togglePlayListAdd = () => {
    props.setIsPlaylistAddOpen((prevState) => !prevState);
  };

  if (props.size === "compact") {
    return (
      <div className={styles.sidebar_compact_fill}>
        <div
          className={`${styles.navBar_container} ${styles.compact_container}`}
        >
          <div className={styles.compact_sidebar}>
            <MenuItem
              primarytext="Principal"
              buttonSize="vertically"
              leftIconUrl="/assets/static/svgs/house.svg"
              isSelected
            />
            <MenuItem
              primarytext="Explorar"
              buttonSize="vertically"
              leftIconUrl="/assets/static/svgs/explore.svg"
            />
            <MenuItem
              primarytext="Biblioteca"
              buttonSize="vertically"
              leftIconUrl="/assets/static/svgs/library_music.svg"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sidebar_expanded_fill}>
      <div
        className={`${styles.navBar_container} ${styles.expanded_container}`}
      >
        <div className={styles.expanded_sidebar}>
          <div className={styles.sidebar_content_buttons}>
            <MenuItem
              primarytext="Principal"
              buttonSize="horizontally"
              leftIconUrl="/assets/static/svgs/house.svg"
              hasRightIcon
              isSelected
            />
            <MenuItem
              primarytext="Explorar"
              buttonSize="horizontally"
              leftIconUrl="/assets/static/svgs/explore.svg"
            />
            <MenuItem
              primarytext="Biblioteca"
              buttonSize="horizontally"
              leftIconUrl="/assets/static/svgs/library_music.svg"
            />
          </div>
        </div>
        <div className={styles.playList_button_container}>
          <Buttons
            onClickFn={togglePlayListAdd}
            type="button"
            text="Nueva Playlist"
            iconUrl="/assets/static/svgs/plus.svg"
            isSelected
          />
        </div>
        <div className={styles.playlist_list_container}>
          <div className={styles.playlist_content}>
            {props.items.map((item, index) => {
              return (
                <SongCard
                  key={`${id}-${index}`}
                  size={"smallest"}
                  imageUrl={item.imageUrl}
                  primaryText={item.title}
                  secondaryText={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
