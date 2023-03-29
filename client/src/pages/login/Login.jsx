import axios from "axios";
import { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  // console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          LOGIN
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
