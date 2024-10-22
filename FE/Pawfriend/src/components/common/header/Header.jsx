import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/images/logoPawFriend 1.png";
import "./Header.css";

export default function Header({ onLoginClick }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/list-a-pet" className="link">List a Pet</Link>
          </li>
          <li>
            <Link to="/pets" className="link">Pets</Link>
          </li>
          <li>
            <Link to="/volunteer" className="link">Volunteer</Link>
          </li>
          <li>
            <Link to="/donate" className="link">Donate</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
          <li onClick={onLoginClick}>
            <i className="fa fa-user"></i> Login/Register
          </li>
        </ul>
      </nav>
    </header>
  );
}
