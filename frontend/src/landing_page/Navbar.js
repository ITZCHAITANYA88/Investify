import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom" style={{ padding: "1rem 2rem" }}>
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" alt="Zerodha Logo" style={{ height: "24px" }} />
        </NavLink>

        {/* Hamburger Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold ${isActive ? "text-primary" : "text-dark"}`} to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold ${isActive ? "text-primary" : "text-dark"}`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold ${isActive ? "text-primary" : "text-dark"}`} to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold ${isActive ? "text-primary" : "text-dark"}`} to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold ${isActive ? "text-primary" : "text-dark"}`} to="/support">
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
