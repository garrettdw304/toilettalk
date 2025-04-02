import React from 'react';
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


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/building-ratings" element={<BuildingRatings />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/maintrequest" element={<MaintRequest />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;