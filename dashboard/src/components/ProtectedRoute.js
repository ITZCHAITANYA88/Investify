import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../utils/axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ get token from localStorage
    if (!token) {
      setIsAuth(false);
      return;
    }

    API.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }, // ✅ send token
    })
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <div>Loading...</div>; // optional loading state

  return isAuth ? children : <Navigate to="/login" />; // redirect to login if not authenticated
};

export default ProtectedRoute;
