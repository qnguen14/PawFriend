import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logoPawFriend 1.png";

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
            <FontAwesomeIcon icon={faUser} /> Login/Register
          </li>
        </ul>
      </nav>
    </header>
  );
}
