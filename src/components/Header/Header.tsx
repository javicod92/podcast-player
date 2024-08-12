import styles from "./header.module.css";
import AvatarAddon from "../AvatarAddon/AvatarAddon.tsx";
import OnPlatformLogo from "../OnPlatformLogo/OnPlatformLogo.tsx";

export default function Header() {
  return (
    <div className={styles.top_bar}>
      <div className={styles.bar_left_content}>
        <button id="button" className={styles.bar_icon_btn}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_584_351"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="33"
              height="32"
            >
              <rect x="0.666656" width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_584_351)">
              <path
                d="M4.66666 24V21.3333H28.6667V24H4.66666ZM4.66666 17.3333V14.6667H28.6667V17.3333H4.66666ZM4.66666 10.6667V8H28.6667V10.6667H4.66666Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
        <a href="#" id="home-page-button" className={styles.bar_home_btn}>
          <OnPlatformLogo size="large"/>
        </a>
      </div>

      <div className={styles.bar_right_content}>
        <div className={styles.right_inner_content}>
          <div className={styles.right_inner_search}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8528 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z"
                fill="#595656"
              />
            </svg>
            <input
              className={styles.seach_input}
              id="search-input"
              itemType="text"
              aria-label="Buscar música"
              placeholder="Buscar canciones, álbumes, artistas o podcast"
            ></input>
          </div>
          <div className={styles.user_content}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
            >
              <mask
                id="mask0_611_423"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_611_423)">
                <path
                  d="M26.2563 26H19.641C19.641 25.6667 19.6296 25.3333 19.607 25C19.5844 24.6667 19.5504 24.3334 19.5051 24H26.2563C26.376 24 26.4743 23.9616 26.5512 23.8846C26.6282 23.8077 26.6666 23.7094 26.6666 23.5897V8.41033C26.6666 8.29066 26.6282 8.19236 26.5512 8.11543C26.4743 8.03849 26.376 8.00003 26.2563 8.00003H5.7436C5.62393 8.00003 5.52563 8.03849 5.4487 8.11543C5.37176 8.19236 5.3333 8.29066 5.3333 8.41033V9.82826C4.99996 9.78295 4.66664 9.74897 4.33333 9.72633C4 9.70368 3.66666 9.69236 3.33333 9.69236V8.41033C3.33333 7.74751 3.56934 7.1801 4.04136 6.7081C4.51336 6.23607 5.08077 6.00006 5.7436 6.00006H26.2563C26.9192 6.00006 27.4866 6.23607 27.9586 6.7081C28.4306 7.1801 28.6666 7.74751 28.6666 8.41033V23.5897C28.6666 24.2526 28.4306 24.82 27.9586 25.292C27.4866 25.764 26.9192 26 26.2563 26ZM3.33333 26V22.718C4.23931 22.718 5.01281 23.0385 5.65383 23.6795C6.29483 24.3205 6.61533 25.094 6.61533 26H3.33333ZM9.53843 26C9.53843 24.2838 8.93331 22.8248 7.72306 21.6231C6.51282 20.4214 5.04957 19.812 3.33333 19.7949V17.7949C5.61708 17.7949 7.55553 18.591 9.14866 20.1832C10.7418 21.7754 11.5384 23.7143 11.5384 26H9.53843ZM14.7179 26C14.7179 24.4205 14.4184 22.941 13.8192 21.5615C13.2201 20.1821 12.4073 18.9791 11.3808 17.9526C10.3543 16.9261 9.15127 16.1133 7.77183 15.5141C6.39236 14.915 4.91286 14.6154 3.33333 14.6154V12.6155C5.18462 12.6155 6.92077 12.965 8.5418 13.6641C10.1628 14.3631 11.5812 15.3206 12.797 16.5363C14.0128 17.7521 14.9702 19.1705 15.6693 20.7915C16.3683 22.4125 16.7179 24.1487 16.7179 26H14.7179Z"
                  fill="white"
                />
              </g>
            </svg>
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
