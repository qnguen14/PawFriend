import React, { useState } from "react";
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import "./Navbar.css"; // Ensure this path is correct

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("overview");
  const navLinks = ["overview", "user-activity", "applications", "donations", "shelters"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img src="/src/assets/images/logoPawFriend 1.png" alt="Logo" className="navbar-logo" style={{ height: '70px',width: '70px', marginRight: '50px'}} />
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a className={`nav-link ${activeLink === link ? "active" : ""}`}
                   href={`#${link}`}
                   onClick={(e) => {
                     e.preventDefault();
                     setActiveLink(link);
                   }}
                >
                  {link.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <button className="nav-link" aria-label="Notifications"><FaBell className="nav-icon" /></button>
            <button className="nav-link" aria-label="Settings"><FaCog className="nav-icon" /></button>
            <button className="nav-link" aria-label="User Profile"><FaUserCircle className="nav-icon" /></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
