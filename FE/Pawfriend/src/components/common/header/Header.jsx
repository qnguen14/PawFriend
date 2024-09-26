import React, { useState } from 'react';
import "./Header.css";
import Logo from "../../../assets/images/logoPawFriend 1.png";
import LoginPopup from '../login/LoginPopup';

export default function Header() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>List a Pet</li>
          <li>Pets</li>
          <li>Volunteer</li>
          <li>Donate</li>
        </ul>
        <ul>
          <li>About</li>
          <li onClick={openLoginPopup}>
            <i className="fa fa-user"></i> Login/Register
          </li>
        </ul>
      </nav>
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
    </header>
  );
}
