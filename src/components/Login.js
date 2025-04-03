import React from "react";
import { Link } from "react-router-dom";
import './Login.css'; // Make sure to include the corresponding CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Gradient background container */}
      <div className="login-card">
        {/* Branding or Logo */}
        <h1 className="brand-name">ToiletTalk</h1>

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please log in to access your account.</p>

        <div className="input-container">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
        </div>

        <div className="button-container">
        <Link to="/home" className="login-button">
            Login
          </Link>
          <Link to="/" className="forgot-password-link">Forgot Password?</Link>
        </div>

        <p className="signup-redirect">
          Don't have an account? <Link to="/createacct" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

