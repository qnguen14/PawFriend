import React from "react";
import "./Footer.css"; // Tạo file CSS riêng
import logo from "../../../assets/images/logoPawFriend 1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-img">
          <img src={logo} alt="Paw-Friend Logo" className="footer-logo" />
        </div>
        {/* About Us Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            accusamus rem quas mollitia quidem facere cum temporibus adipisci
            dolorem autem eligendi tenetur voluptas possimus a ea, quaerat
            itaque reprehenderit nam.
          </p>
        </div>
        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fa fa-phone"></i> +84 123456789
          </p>
          <p>
            <i className="fa fa-envelope"></i> pawfund@charity.com
          </p>
          <p>
            <i className="fa fa-map-marker"></i> District 9, HCMC
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-follow">
          <h3>Follow Us</h3>
          <a href="#">
            <i className="fa-brands fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright &copy; 2024 PawFriend</p>
      </div>
    </footer>
  );
};

export default Footer;
