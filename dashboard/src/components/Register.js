import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";
import "./AuthForm.css"; // Reuse this for styling if you already created it for Login

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post("/auth/register", form);
    alert("Registration successful!");
    navigate("/dashboard"); // ✅ Redirect here
  } catch (err) {
    alert(err.response?.data?.error || "Registration failed");
  }
};

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <p onClick={() => navigate("/login")} className="auth-link">
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Register;
