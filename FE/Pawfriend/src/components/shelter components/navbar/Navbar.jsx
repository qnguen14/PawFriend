import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/shelter/pets">Pets</Link>
        <Link to="/shelter/applications">Applications</Link>
        <Link to="/shelter/donations">Donations</Link>
        <Link to="/shelter/events">Events</Link>
        <Link to="/shelter/overview">Overview</Link>
      </div>
      <div className="navbar-notifications">
        <div className="notification-item">
          <FaBell />
        </div>
      </div>
    </div>
  );
};

export default Navbar;