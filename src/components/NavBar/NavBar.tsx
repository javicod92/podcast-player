import styles from "./NavBar.module.css";
import Sidebar from "./Sidebar.tsx";

export default function NavBar() {
  return (
    <div className={styles.nav_container}>
      <Sidebar />
    </div>
  );
}
