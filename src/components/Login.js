import React from "react";
import { Link } from "react-router-dom";
import './Login.css'; // Make sure to include the corresponding CSS file
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../api'

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/signIn/', {
        email,
        password
      }).then((res) => {
      navigate('/home', { state: {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken}})
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
  };

  return (
    <div className="login-container">
      {/* Gradient background container */}
      <div className="login-card">
        {/* Branding or Logo */}
        <h1 className="brand-name">ToiletTalk</h1>

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please log in to access your account.</p>

        <form onSubmit={handleSubmit} className="create-acct-form">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="create-acct-button">Log In</button>

          <p className="signup-redirect">
            Don't have an account? <Link to="/createacct" className="signup-link">Sign Up</Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;

