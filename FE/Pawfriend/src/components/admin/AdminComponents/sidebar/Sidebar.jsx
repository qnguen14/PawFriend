import React, { useState } from "react";
import { FaHome, FaUser, FaFile, FaDonate, FaCompass } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${activeItem === "Overview" ? "active" : ""}`}
        onClick={() => handleItemClick("Overview")}
      >
        <FaHome className="icon" />
        <span>Overview</span>
      </div>
      <div
        className={`sidebar-item ${activeItem === "Users" ? "active" : ""}`}
        onClick={() => handleItemClick("Users")}
      >
        <FaUser className="icon" />
        <span>Users</span>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Application" ? "active" : ""
        }`}
        onClick={() => handleItemClick("Application")}
      >
        <FaFile className="icon" />
        <span>Application</span>
      </div>
      <div
        className={`sidebar-item ${activeItem === "Donations" ? "active" : ""}`}
        onClick={() => handleItemClick("Donations")}
      >
        <FaDonate className="icon" />
        <span>Donations</span>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Collections" ? "active" : ""
        }`}
        onClick={() => handleItemClick("Collections")}
      >
        <FaCompass className="icon" />
        <span>Collections</span>
      </div>
    </div>
  );
}
