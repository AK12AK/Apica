import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Orders from "../Orders/Orders";
import PageNotFound from "../404/404";
import Dashboard from "../Dashboard/Dashboard";
import "./home.scss";

const home = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavbarVisible(false); // Close navbar on route change
  }, [location]);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="nav-pages">
      <button className="hamburger-icon" onClick={toggleNavbar}>
        =
      </button>
      <div className={`navbar-wrapper ${isNavbarVisible ? "visible" : ""}`}>
        <Navbar />
      </div>
      <div className={`pages ${!isNavbarVisible ? "" : "none"}`}>
        <Routes>
          <Route path="/404" element={<PageNotFound />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default home;
