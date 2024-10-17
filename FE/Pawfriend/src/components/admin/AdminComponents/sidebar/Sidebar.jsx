import React from "react";
import { FaHome, FaUser, FaFile, FaDonate, FaCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ activeLink, setActiveLink }) {
  const navItems = [
    { name: "overview", icon: <FaHome />, label: "Overview" },
    { name: "users", icon: <FaUser />, label: "Users" },
    { name: "applications", icon: <FaFile />, label: "Applications" },
    { name: "donations", icon: <FaDonate />, label: "Donations" },
    { name: "collaborators", icon: <FaCompass />, label: "Collaborators" },
  ];

  return (
    <nav className="sidebar" aria-label="Admin Sidebar">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={`/admin/${item.name}`}
          className={`sidebar-item ${activeLink === item.name ? "active" : ""}`}
          onClick={() => setActiveLink(item.name)}
          aria-current={activeLink === item.name ? "page" : undefined}
        >
          <div className="icon">{item.icon}</div>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
