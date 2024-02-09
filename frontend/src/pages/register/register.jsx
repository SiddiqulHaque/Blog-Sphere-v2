import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [seepass, setseePass] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://blog-sphere-b9vl.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
      return error;
    }
  };
  return (
    <div className="register">
      <span className="registertitle">SignUp</span>
      <form className="registerform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>E-Mail</label>
        <input
          className="registerinput"
          type="Email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <div className="password">
          <input
            className="pass"
            type={seepass ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
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

        <button className="registerbtn" type="submit">
          <Link className="link" to="/register">
            Signup
          </Link>
        </button>
        <span className="registerlogbtn">
          {" "}
          <Link className="link" to="/login">
            Existing User? Login
          </Link>
        </span>
      </form>
      {error && <span className="Error">Something went wrong!</span>}
    </div>
  );
};

export default Register;
