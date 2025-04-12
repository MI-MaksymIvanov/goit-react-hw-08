import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const hadleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={hadleLogout}>
        Logout
      </button>
    </div>
  );
}
