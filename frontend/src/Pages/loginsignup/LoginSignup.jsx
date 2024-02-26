import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./loginsignup.css";
import { useAuth } from "../../Context/auth";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/login`,
        formData
      );
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth-token", JSON.stringify(res.data));
        navigate("/");
      } else {
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const userRegistration = async () => {
    try {
      const responseData = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/register`,
        formData
      );

      console.log(responseData);
      if (responseData?.success) {
        console.log("first");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name.."
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email.."
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Your Password.."
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? userLogin() : userRegistration();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By clicking, I agree the terms and conditions of the use of privacy
            policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
