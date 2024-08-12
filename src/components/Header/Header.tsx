import styles from "./header.module.css";
import AvatarAddon from "../AvatarAddon/AvatarAddon.tsx";
import OnPlatformLogo from "../OnPlatformLogo/OnPlatformLogo.tsx";

export default function Header() {
  return (
    <div className={styles.top_bar}>
      <div className={styles.bar_left_content}>
        <button id="button" className={styles.bar_icon_btn}>
          <img src="/src/assets/static/svgs/menu.svg" alt="Menu" />
        </button>
        <a href="#" id="home-page-button" className={styles.bar_home_btn}>
          <OnPlatformLogo size="large"/>
        </a>
      </div>

      <div className={styles.bar_right_content}>
        <div className={styles.right_inner_content}>
          <div className={styles.right_inner_search}>
            <img src="/src/assets/static/svgs/FindIcon.svg" alt="Find Icon" />
            <input
              className={styles.seach_input}
              id="search-input"
              itemType="text"
              aria-label="Buscar música"
              placeholder="Buscar canciones, álbumes, artistas o podcast"
            ></input>
          </div>
          <div className={styles.user_content}>
            <img src="/src/assets/static/svgs/cast.svg" alt="Cast" />
            <AvatarAddon
              imageUrl="./src/assets/static/images/userAvatar/Avatar.png"
              size="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
