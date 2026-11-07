import { connect } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";
import { fetchInitialUser } from "../../store/slices/userSlice";
import styles from "./Header.module.scss";
import UserProfile from "../UserProfile";

function Header({ user, getUser }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.logo)}>Todo</div>
      <div className={classNames(styles.userProfile)}>
        {user ? <UserProfile user={user} /> : <span>Loading...</span>}
      </div>
    </div>
  );
}

const mapStateToProps = ({ userProfile }) => userProfile;

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(fetchInitialUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
