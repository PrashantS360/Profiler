import { Link } from "react-router-dom";
import { User } from "./User/User";
import styles from "./UserInfo.module.scss";

export function UserInfo() {
  return (
    <div className={styles.img_container}>
      <div className={styles.main_container}>
        <User />
        <Followers />
      </div>
    </div>
  );
}

function Followers() {
  return (
    <Link to="/followers">
      <h4 className={styles.followers}>9 Followers</h4>
    </Link>
  );
}
