// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand Name */}
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        Investify
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          Contact
        </Link>

        {/* Sign Up for Free Button */}
        <Link
          to="/signup"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Sign Up for Free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
