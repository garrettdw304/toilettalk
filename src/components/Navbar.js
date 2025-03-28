import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
function Navbar() {

  const location = useLocation();

  // Check if the current route is the user profile view
  const isUserProfile = location.pathname === '/userprofile';

  // If it's the user profile view, don't render the navbar
  if (isUserProfile) {
    return null;
  }

  return (
    <div class="navbar navbar-menu">
      <Link to="/" class="navbar-brand" style={{ color: "white" }}>
        <img src="toilettalk.png" alt="ToiletTalk Logo" />
        <nobr class="jersey-15-regular" style={{ fontSize: "35px" }}>ToiletTalk</nobr>
      </Link>

      <div>
        <Link className="jersey-15-regular" style={{ fontSize: "25px" }} to="/" activeClassName="active">Home</Link>
        <Link className="jersey-15-regular" style={{ fontSize: "25px" }} to="/building-ratings" activeClassName="active">Ratings</Link>
        <Link className="jersey-15-regular" style={{ fontSize: "25px" }} to="/chat" activeClassName="active">Chat</Link>
        <Link className="jersey-15-regular" style={{ fontSize: "25px" }} to="/maintrequest" activeClassName="active">Maintenance Request</Link>
        <Link className="jersey-15-regular" style={{ fontSize: "25px" }} to="/userprofile" activeClassName="active">User Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;