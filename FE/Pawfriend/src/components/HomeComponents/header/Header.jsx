import React from "react";
import "./Header.css";
import Logo from "../../../assets/images/logoPawFriend 1.png";

export default function Header() {
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
          <li>
            <i className="fa fa-user"></i> Login/Register
          </li>
        </ul>
      </nav>
    </header>
  );
}
