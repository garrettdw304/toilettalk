import React from "react";
import { Link } from "react-router-dom";
import './HomeLayout.css';

const HomeLayout = () => {
  return (
    <div className="home-container">
      <div className="card">
      <a href="/" className="logout_button" title="Log Out">
          <i className="fas fa-sign-out-alt"></i>
          </a>
        <img
          src="/assets/toilet.jpg" // Replace with your actual logo path
          alt="App Logo"
          className="logo"
        />
        <h1>Welcome to ToiletTalk</h1>
        <p>
          Share your thoughts, report issues, and connect with the community!
        </p>
        <div className="buttonContainer">
          <Link to="/building-ratings" className="button">
            Ratings
          </Link>
          <Link to="/" className="button">
            Chat
          </Link>
          <Link to="/maintrequest" className="button">
            Maintenance Request
          </Link>
          <Link to="/userprofile" className="button">
            Profile
          </Link>
          <Link to="/bathroomsearch" className="button">
            Bathroom Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;

