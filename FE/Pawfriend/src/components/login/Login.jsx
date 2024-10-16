import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dog from "../../assets/images/header-image-dog.jpg";
import googleIcon from "../../assets/images/image.png";
import api from "../../config/api.jsx";
import "./Login.css";

function Login({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      console.log(values);

      const response = await api.post("users/login", values);
      const { token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/home");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-overlay">
      <div
        className={`login-modal ${
          activeTab === "register" ? "register-modal" : ""
        }`}
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="login-tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>
        <div className="modal-content">
          {activeTab === "login" ? (
            <div className="login-form">
              <button className="google-login">
                <img src={googleIcon} alt="Google icon" />
                Login with Google
              </button>
              <div className="divider">
                <span>or</span>
              </div>
              <form onSubmit={handleLogin}>
                <div className="input-container">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <input type="text" placeholder="Username or Email" />
                </div>
                <div className="input-container">
                  <FontAwesomeIcon icon={faLock} className="icon" />
                  <input type="password" placeholder="Password" />
                </div>
                <button className="submit-button">Login</button>
              </form>
              <div className="switch-link">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("register");
                  }}
                >
                  Register Here
                </a>
              </div>
            </div>
          ) : (
            <div className="register-form">
              <button className="google-login">
                <img src={googleIcon} alt="Google icon" />
                Register with Google
              </button>
              <div className="divider">
                <span>or</span>
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="name-inputs">
                <div className="input-container half-width">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input-container half-width">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faLock} className="icon" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faLock} className="icon" />
                <input type="password" placeholder="Re-enter Password" />
              </div>
              <div className="terms-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I have read and agree to the Terms and Privacy Policy
                </label>
              </div>
              <button className="submit-button">Register</button>
              <div className="switch-link">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("login");
                  }}
                >
                  Login Here
                </a>
              </div>
            </div>
          )}
          <div className="side-image-container">
            <div className="side-image">
              <img src={Dog} alt="Dog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
