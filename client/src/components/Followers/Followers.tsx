import styles from "./Followers.module.scss";
import data from "./data.json";

export function Followers() {
  return (
    <div className={styles.container}>
      <h4>Users Following you</h4>
      <div className={styles.content}>
        {data.map((d) => {
          return (
            <FollowerUser
              followersCount={d.followersCount}
              profession={d.profession}
              img={d.img}
              name={d.name}
              key = {d.id}
            />
          );
        })}
      </div>
    </div>
  );
}

function FollowerUser({
  followersCount,
  name,
  profession,
  img,
}: FollowerUserProps) {
  return (
    <div className={styles.follower_container}>
      <img src={img} className={styles.userimg} />
      <p className={styles.name}>{name}</p>
      <p className={styles.profession}>{profession}</p>
      <p className={styles.count}>{followersCount} Followers</p>
      <button>Follow</button>
    </div>
  );
}

interface FollowerUserProps {
  img: string;
  name: string;
  profession: string;
  followersCount: number;
}
