import classNames from "classnames";
import styles from "./UserProfile.module.scss";

function UserProfile({ user }) {
  const {
    name: { first, last },
    picture: { medium },
  } = user;

  return (
    <div className={classNames(styles.userProfile)}>
      <img className={classNames(styles.userAvatar)} src={medium} alt={first} />
      <span className={classNames(styles.userName)}>
        {first} {last}
      </span>
    </div>
  );
}

export default UserProfile;
