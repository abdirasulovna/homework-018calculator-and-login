import { useDispatch, useSelector } from "react-redux";
import { authActionTypes } from "../store/auth/authReducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthrized = useSelector((state) => state.auth.isAuthrized);

  console.log(isAuthrized);

  const logoutHandler = () => {
    dispatch({ type: authActionTypes.LOG_OUT });
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthrized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
