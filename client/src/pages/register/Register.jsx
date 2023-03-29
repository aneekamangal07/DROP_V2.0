import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      //console.log(res);
      res.data && window.location.replace("/login");
    } catch (err) {
      // console.log(err);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">REGISTER</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
      {error && <span>Something went wrong!</span>}
    </div>
  );
}
