import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";
import "./AuthForm.css"; // reuse styling from registration

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const res = await API.post("/auth/login", form);

      // Store JWT token for authenticated routes
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");

      // ✅ Pass username to dashboard via navigate state
      navigate("/dashboard", { state: { username: form.username } });
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

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

        <button type="submit">Login</button>

        <p className="auth-link" onClick={() => navigate("/register")}>
          Don't have an account? Register
        </p>
      </form>
    </div>
  );
};

export default Login;
