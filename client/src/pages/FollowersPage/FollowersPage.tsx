import { Followers } from "../../components/Followers/Followers";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./FollowersPage.module.scss";

export function FollowersPage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Followers />
    </div>
  );
}
