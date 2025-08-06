import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../utils/axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    API.get("/auth/me")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
