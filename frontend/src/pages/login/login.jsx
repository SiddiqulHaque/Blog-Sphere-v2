import React, { useContext, useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";
import { FaEye } from "react-icons/fa";
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const { dispatch, isFetching } = useContext(Context);
  const [seepass, setseePass] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://blog-sphere-b9vl.onrender.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="logininput"
          type="text"
          placeholder="Enter your Username"
          ref={userRef}
        />
        <label>Password</label>
        <div className="password">
          <input
            className="pass"
            type={seepass ? "text" : "password"}
            placeholder="Enter your Password"
            ref={passwordRef}
          />
          <FaEye
            style={{ cursor: "pointer" }}
            onClick={() =>
              setseePass((prev) => {
                return !prev;
              })
            }
          ></FaEye>
        </div>

        <button className="loginbtn" type="submit" disabled={isFetching}>
          Login
        </button>
        <span className="loginregbtn">
          <Link className="link" to="/register">
            New User ? Register
          </Link>
        </span>
      </form>
      {error && <span className="Error">Wrong Credentials!</span>}
    </div>
  );
};

export default Login;
