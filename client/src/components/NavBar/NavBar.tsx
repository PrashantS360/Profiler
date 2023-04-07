import styles from "./NavBar.module.scss";
import { Bell } from "./Bell/Bell";
import { CipherPoints } from "./CipherPoints/CipherPoints";
import { Logo } from "./Logo/Logo";
import { SearchBox } from "./SearchBox/SearchBox";
import { ThemeButton } from "./ThemeButton/ThemeButton";
import { NavUser } from "./User/NavUser";

export function NavBar() {
  return (
    <nav className={styles.container}>
      <Logo />
      <div className={styles.right_container}>
        <SearchBox />
        <Bell />
        <NavUser />
        <CipherPoints />
        <ThemeButton />
      </div>
    </nav>
  );
}
