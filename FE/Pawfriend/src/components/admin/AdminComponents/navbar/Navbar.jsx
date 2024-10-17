import React from "react";
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this path is correct

const Navbar = ({ activeLink, setActiveLink }) => {
  const navLinks = ["overview", "users", "applications", "donations", "collaborators"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light me-auto">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img src="/src/assets/images/logoPawFriend 1.png" alt="Logo" className="navbar-logo" style={{ height: '50px', width: '50px', marginRight: '20px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <Link className={`nav-link ${activeLink === link ? "active" : ""}`}
                      to={`/admin/${link}`}
                      onClick={() => setActiveLink(link)}>
                  {link.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <Link to="/notifications" className="nav-link" aria-label="Notifications"><FaBell className="nav-icon" /></Link>
            <Link to="/settings" className="nav-link" aria-label="Settings"><FaCog className="nav-icon" /></Link>
            <Link to="/profile" className="nav-link" aria-label="User Profile"><FaUserCircle className="nav-icon" /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
