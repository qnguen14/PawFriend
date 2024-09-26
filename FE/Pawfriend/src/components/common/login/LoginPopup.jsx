import React, { useState } from 'react';
import './LoginPopup.css';

function LoginPopup({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập ở đây
    console.log('Đăng nhập với:', username, password);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <div className="login-header">
          <button className="tab active">Login</button>
          <button className="tab">Register</button>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <button className="google-login-button">
          <img src="google-icon.png" alt="Google icon" />
          Login with Google
        </button>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon">🔒</span>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="register-link">
          Don't have an account? <a href="#">Register Here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
