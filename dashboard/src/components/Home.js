import React from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Login from "./Login";
import Register from "./Register"; // ✅ NEW
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ NEW */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Home;
