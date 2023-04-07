import styles from "./Bell.module.scss";
import { AiOutlineBell } from "react-icons/ai";

export function Bell() {
  return (
    <div className={styles.container}>
      <span>0</span>
      <AiOutlineBell size={22} className={styles.bell_icon} />
    </div>
  );
}
