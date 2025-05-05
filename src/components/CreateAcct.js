import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CreateAcct.css'; // Link to your CSS file
import { useNavigate } from 'react-router-dom';
import api from '../api'

const CreateAcct = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/signUp/', {
      email: email,
      username: username,
      password: password
    }).then((res) => {
      console.log(res)
      navigate('/home', { state: { accessToken: res.data.accessToken, refreshToken: res.data.refreshToken } })
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.error)
        alert("Error: " + err.response.data.error)
      else
        alert("Error: " + err)
    })
  };

  return (
    <div className="create-acct-container">
      <div className="create-acct-card">
        {/* Branding */}
        <h1 className="brand-name">ToiletTalk</h1>

        <h1 className="create-acct-title">Create Your Account</h1>
        <p className="create-acct-subtitle">Join us and get started with sharing thoughts!</p>

        <form onSubmit={handleSubmit} className="create-acct-form">
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button type="submit" className="create-acct-button">Create Account</button>
        </form>

        <p className="login-redirect">
          Already have an account? <Link to="/login" className="login-link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAcct;
