import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  // Check if the current route is the user profile view
  const isUserProfile = location.pathname === '/userprofile';

  // If it's the user profile view, don't render the navbar
  if (isUserProfile) {
    return null;
  }

  return (
    <div class="navbar navbar-menu">
      <div className='title'>
      <button class="navbar-brand" style={{ color: "white" }} onClick={() => navigate("/home", { state: state })}>
        <img src="/assets/duckontoilet.jpg" className='duck' alt="ToiletTalk Logo" />
        <nobr class="jersey-15-regular" style={{ fontSize: "35px" }}>ToiletTalk</nobr>
      </button>
      </div>

      <div className='navbar-buttons'>
      <button className="jersey-15-regular" style={{ fontSize: "25px" }} onClick={() => navigate("/bathroomsearch", { state: state })} activeClassName="active">Bathroom Ratings</button>
        <button className="jersey-15-regular" style={{ fontSize: "25px" }} onClick={() => navigate("/chat", { state: state })} activeClassName="active">Chat</button>
        <button className="jersey-15-regular" style={{ fontSize: "25px" }} onClick={() => navigate("/maintrequest", { state: state })} activeClassName="active">Maintenance Request</button>
        <button className="jersey-15-regular" style={{ fontSize: "25px" }} onClick={() => navigate("/userprofile", { state: state })} activeClassName="active">{state ? state.username : "Profile"}</button>
        </div>
        <a href="/" className="logout_button" title="Log Out">
          <i className="fas fa-sign-out-alt"></i>
        </a>
    </div>
  );
}

export default Navbar;