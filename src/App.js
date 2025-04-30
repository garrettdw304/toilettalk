import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomeLayout from './components/HomeLayout';
import UserProfile from './components/UserProfile';
import BuildingRatings from './components/BuildingReviewCard';
import MaintRequest from './components/MaintRequest';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LandingPage from './components/LandingPg';
import LoginPage from './components/Login';
import CreateAcct from './components/CreateAcct';
import BathroomSearch from './components/BathroomSearch';
import Bathroom from './components/Bathroom';
import ChatPage from './components/Chat';
import LeaveReview from './components/LeaveReview';


function App() {
  const [reviews, setReviews] = useState({});

  const addReview = (bathroomId, review) => {
    setReviews(prev => ({
      ...prev,
      [bathroomId]: [...(prev[bathroomId] || []), review]
    }));
  };


  return (
      <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createacct" element={<CreateAcct/>} />
          <Route path="/building-ratings" element={<BuildingRatings />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/maintrequest" element={<MaintRequest />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/bathroomsearch" element={<BathroomSearch />} />
          <Route path="/bathroom/:id" element={<Bathroom reviews={reviews} />} />
        <Route path="/leave-review/:id" element={<LeaveReview addReview={addReview} />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;