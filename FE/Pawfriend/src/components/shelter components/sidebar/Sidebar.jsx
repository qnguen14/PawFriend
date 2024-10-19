import React from 'react';
import './Sidebar.css';
import { FaDonate, FaFileAlt, FaCalendarAlt, FaPaw, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ShelterIcon from "../../../assets/images/Shelter icon.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={ShelterIcon} alt="Shelter Logo" className="logo-image" />
      </div>
      <ul className="sidebar-links">
        <li className="sidebar-item">
          <Link to="/shelter/overview">
            <FaHome />
            <span>Overview</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/shelter/pets">
            <FaPaw />
            <span>Pets</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/shelter/applications">
            <FaFileAlt />
            <span>Applications</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/shelter/donations">
            <FaDonate />
            <span>Donations</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/shelter/events">
            <FaCalendarAlt />
            <span>Events</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;