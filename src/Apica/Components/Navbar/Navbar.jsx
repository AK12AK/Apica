import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import rightarrow from "../Assets/Vector.svg";
import gifticon from "../Assets/fi_gift.svg";
import headphoneIcon from "../Assets/fi_headphones.svg";
import settings from "../Assets/Setting.svg";
import chaticon from "../Assets/Chat.svg";
import foldericon from "../Assets/Folder.svg";
import usericon from "../Assets/User.svg";
import bagicon from "../Assets/Bag.svg";
import catgeoryicon from "../Assets/Category.svg";
import logouticon from "../Assets/Logout.svg";
import graph from "../Assets/Graph.svg";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navcontainer">
      <div className="brandlogo">
        <img src={graph} />
        <p className="logoname">Metrix</p>
      </div>
      <ul className="listcontainer">
        <li className={activeLink === "/" ? "active" : ""}>
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <div className="navlist">
              <img src={catgeoryicon} alt="Dashboard" />
              <p>Dashboard</p>
            </div>
          </Link>
        </li>
        <li className={activeLink === "/orders" ? "active" : ""}>
          <Link to="/orders" onClick={() => handleLinkClick("/orders")}>
            <div className="navlist">
              <img src={bagicon} alt="Orders" />
              <p>Orders</p>
              <p className="number one">3</p>
            </div>
          </Link>
        </li>
        <li className={activeLink === "/customers" ? "active" : ""}>
          <Link to="/404" onClick={() => handleLinkClick("/customers")}>
            <div className="navlist">
              <img src={usericon} alt="Customers" />
              <p>Customers</p>
            </div>
          </Link>
        </li>
        <li className={activeLink === "/inventory" ? "active" : ""}>
          <Link to="/404" onClick={() => handleLinkClick("/inventory")}>
            <div className="navlist">
              <img src={foldericon} alt="Inventory" />
              <p>Inventory</p>
            </div>
          </Link>
        </li>
        <li className={activeLink === "/conversations" ? "active" : ""}>
          <Link to="/404" onClick={() => handleLinkClick("/conversations")}>
            <div className="navlist">
              <img src={chaticon} alt="Conversations" />
              <p>Conversations</p>
              <p className="number two">16</p>
            </div>
          </Link>
        </li>
        <li className={activeLink === "/settings" ? "active" : ""}>
          <Link to="/404" onClick={() => handleLinkClick("/settings")}>
            <div className="navlist">
              <img src={settings} alt="Settings" />
              <p>Settings</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className="navbottom">
        <div className="support navlist">
          <img src={headphoneIcon} alt="Contact Support" />
          <p>Contact Support</p>
        </div>
        <div className="giftcontainer">
          <div className="freegift navlist">
            <img src={gifticon} alt="Free Gift" />
            <p>Free Gift Awaits You!</p>
          </div>
          <div className="upgrade navlist">
            <p>Upgrade your account</p>
            <img src={rightarrow} alt="Upgrade" />
          </div>
        </div>
        <div className="logout navlist">
          <img src={logouticon} alt="Logout" />
          <p>Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
