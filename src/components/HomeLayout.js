import React from "react";
import './HomeLayout.css';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomeLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state

  useEffect(() => {
    console.log(state)
  })

  const onBathroomRatings = () => {
    navigate('/bathroomsearch', { state: state })
  }

  const onChat = () => {
    navigate('/chat', { state: state })
  }

  const onMaintReq = () => {
    navigate('/maintrequest', { state: state })
  }

  const onUserProfile = () => {
    navigate('/userprofile', { state: state })
  }

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
          <button className="button" onClick={onBathroomRatings}>Bathroom Ratings</button>
          <button className="button" onClick={onChat}>Chat</button>
          <button className="button" onClick={onMaintReq}>Maintenance Request</button>
          <button className="button" onClick={onUserProfile}>Profile</button>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;

