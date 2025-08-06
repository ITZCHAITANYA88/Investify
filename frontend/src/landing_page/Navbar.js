import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom"
      style={{ padding: "1rem 2rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "24px" }}
          />
        </Link>
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
