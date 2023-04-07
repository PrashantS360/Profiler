import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <div className={styles.container}>
        <img src="/logo.png" />
        <h1 className={styles.logo_text}>CipherSchools</h1>
      </div>
    </Link>
  );
}
