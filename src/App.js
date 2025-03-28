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

const cards = [
  {
    building: 'Building A',
    rating: 4.5,
    ratingNum: 120,
    image: '/assets/imageA.jpg',
  },
  {
    building: 'Building B',
    rating: 4.0,
    ratingNum: 90,
    image: '/assets/imageB.jpg',
  },
  {
    building: 'Building C',
    rating: 3.5,
    ratingNum: 60,
    image: '/assets/imageC.jpg',
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout cards={cards} />} />
          <Route path="/building-ratings" element={<BuildingRatings />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/maintrequest" element={<MaintRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;