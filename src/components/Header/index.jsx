import classNames from "classnames";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.logo)}>Todo</div>
      <div className={classNames(styles.userProfile)}>User</div>
    </div>
  );
}

export default Header;
