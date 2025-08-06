import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";
import "./Login.css"; // ⬅️ import the CSS below

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post("/auth/login", form);
    alert("Login successful!");
    navigate("/dashboard"); // ✅ Redirect here
  } catch (err) {
    alert(err.response?.data?.error || "Login failed");
  }
};

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>

        <input
          className="login-input"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
