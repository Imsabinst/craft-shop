import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userRegistration = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}api/v1/user/register`,
        formData
      );
      if (data.success) {
        alert("Registration successful");
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Register">
      <h1>Sign Up</h1>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <button onClick={userRegistration}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
