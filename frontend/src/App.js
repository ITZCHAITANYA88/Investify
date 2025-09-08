import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import OpenAccount from "./components/OpenAccount";
import SupportPage from "./components/SupportPage";
import Signup from "./components/Signup";
import Universe from "./components/Universe";
// Add other pages like About, Product, Pricing as you create them

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<OpenAccount />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/universe" element={<Universe />} />
            {/* Add these when ready */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/product" element={<Product />} /> */}
            {/* <Route path="/pricing" element={<Pricing />} /> */}
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
