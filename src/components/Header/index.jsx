import { connect } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";
import { fetchInitialUser } from "../../store/slices/userSlice";
import styles from "./Header.module.scss";
import UserProfile from "../UserProfile";

function Header({ user, isFetching, error, getUser }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.logo)}>Todo</div>
      <div className={styles.userProfile}>
        {isFetching && (
          <span className={styles.userProfileFetching}>Loading...</span>
        )}
        {error && (
          <span className={styles.userProfileError}>Failed to load</span>
        )}
        {user && <UserProfile user={user} />}
      </div>
    </div>
  );
}

const mapStateToProps = ({ userProfile }) => userProfile;

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(fetchInitialUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
