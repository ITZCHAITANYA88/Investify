import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";
import Menu from "./Menu";
import "./TopBar.css";

const TopBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ get token from localStorage
    if (!token) {
      setIsAuthenticated(false);
      setUsername("");
      return;
    }

    API.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }, // ✅ send token
    })
      .then((res) => {
        setIsAuthenticated(true);
        setUsername(res.data.username);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setUsername("");
      });
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await API.post("/auth/logout", null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("token"); // ✅ remove token on logout
      setIsAuthenticated(false);
      setUsername("");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      alert("Logout failed");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      <div className="auth-button-container">
        {isAuthenticated ? (
          <>
            <span className="welcome-msg">Welcome, {username}</span>
            <button className="auth-btn logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="auth-btn login" onClick={handleLogin}>
              Login
            </button>
            <button className="auth-btn register" onClick={handleRegister}>
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
