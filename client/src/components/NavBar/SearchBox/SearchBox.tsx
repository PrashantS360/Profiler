import styles from "./SearchBox.module.scss";
import { BiSearch } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";

export function SearchBox() {
  return (
    <div className={styles.container}>
      <BiSearch size={16} className={styles.icon} />
      <input placeholder="Search and Learn" />
      <CgOptions color="#fff" size={18} className={styles.icon} />
    </div>
  );
}
