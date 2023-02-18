import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActionTypes } from "../store/auth/authReducer";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (e) => {
      setForm((prev) => ({ ...prev, [name]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.email === "test@gmail.com" && form.password === "123123") {
      dispatch({
        type: authActionTypes.LOG_IN,
        payload: form.email,
      });
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={inputChangeHandler("email")} value={form.email } />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={inputChangeHandler("password")} value={form.password} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
