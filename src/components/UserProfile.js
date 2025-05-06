import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './UserProfile.css';
import { useEffect } from 'react';
import api from '../api'

const UserProfile = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [ reviews, setReviews ] = useState([]);
  const [ userInfo, setUserInfo ] = useState({
    displayName: "Loading...",
    profilePicture: "assets/robot.jpg"
  });

  useEffect(() => {
    if (!state || !state.username) {
      navigate("/");
      return;
    }

    setUserInfo({ ...userInfo, displayName: state.username })
    
    api.post('/getMyInfo/', {
      accessToken: state.accessToken
    }).then((res) => {
      console.log(res.data)
      setReviews(res.data.reviews)
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.error)
        alert("Error: " + err.response.data.error)
      else
        alert("Error: " + err)
    })
  }, []); // [] means run only once when component mounts

  const userUsage = {
    Total: 50,
    Downtown: 20,
    Evansdale: 15,
    HSC: 15,
  };

  const userAchievement = {
    TwentyFiveBathroom: 'Used 25 different bathrooms',
    EveryBuilding: 'Used a bathroom in every building',
    FiveReviews: 'Submitted 5 reviews',
  };

  const userReview = {
    Review1: 'Clean and well-maintained.',
    Review2: 'Could use more frequent cleaning.',
    Review3: 'Spacious and modern facilities.',
  };

  return (
    <div>
      {userInfo === undefined ? (
        <p>Failed fetching user info</p>
      ) : (
        <div>
          {/* Navbar Container containing home button, edit profile dropdown, and user profile picture */}
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <div className='title'>
      <button class="navbar-brand" style={{ color: "white" }} onClick={() => navigate("/home", { state: state })}>
        <img src="/assets/duckontoilet.jpg" className='duck' alt="ToiletTalk Logo" />
        <nobr class="jersey-15-regular" style={{ fontSize: "35px" }}>ToiletTalk</nobr>
      </button>
      </div>
              {/* Profile Picture Container */}
              <div className="d-flex ms-auto align-items-center">
              <div className="profile-name">
                  {userInfo.displayName}
                </div>
                <div className="profile-pic-container">
                  <img src={userInfo.profilePicture} className="profile-pic" alt="Profile Picture" />
                </div>
              </div>
            </div>
            <ul className="navbar-nav me-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    Edit Profile
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Bio</a></li>
                    <li><a className="dropdown-item" href="#">Profile Picture</a></li>
                    <li><a className="dropdown-item" href="#">User Name</a></li>
                    <li><a className="dropdown-item" href="/">Log Out</a></li>
                  </ul>
                </li>
              </ul>
              <div className='pad'></div>
          </nav>
          {/* User Stats Header */}
          <div className="user-stats-header">
            <h1>Here are your Toilet Stats</h1>
          </div>
          {/* Stores toilet statistics */}
          {userUsage === undefined ? (
            <p>Failed fetching user info</p>
          ) : (
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="card-group mx-auto">
                  {/* Card containing a users BathroomUsage statistics */}
                  <div className="card mx-3 bg-light" style={{ borderRadius: '10px' }}>
                    <div className="card-body">
                      <h5 className="card-title">Bathroom Usage</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Your Toilet Tendencies</h6>
                      <p className="card-text">Total Bathrooms Used: {userUsage.Total}</p>
                      <p className="card-text">Downtown: {userUsage.Downtown}</p>
                      <p className="card-text">Evansdale: {userUsage.Evansdale}</p>
                      <p className="card-text">HSC: {userUsage.HSC}</p>
                    </div>
                  </div>
                  {/* Card containing a users Achievements */}
                  {userAchievement === undefined ? (
                    <p>Failed fetching user info</p>
                  ) : (
                    <div className="card mx-3 bg-light" style={{ borderRadius: '10px' }}>
                      <div className="card-body">
                        <h5 className="card-title">Achievements</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Your Lavatory Legacy</h6>
                        <p className="card-text">Recent Achievements:</p>
                        <p className="card-text">{userAchievement.TwentyFiveBathroom}</p>
                        <p className="card-text">{userAchievement.EveryBuilding}</p>
                        <p className="card-text">{userAchievement.FiveReviews}</p>
                      </div>
                    </div>
                  )}
                  {/* Card containing a users recent reviews */}
                  {userReview === undefined ? (
                    <p>Failed fetching user info</p>
                  ) : (
                    <div className="card mx-3 bg-light" style={{ borderRadius: '10px' }}>
                      <div className="reviews-container">
                        {reviews.length > 0 ? (
                          reviews.map((review, index) => (
                            <div key={index} className="review">
                              <strong>{review.username}</strong>
                              <div className="review-rating">
                                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                              </div>
                              <p>{review.review}</p>
                            </div>
                          ))
                        ) : (
                          <p>No reviews yet. Get out there!</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;