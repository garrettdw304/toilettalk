import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomeLayout from './components/HomeLayout';
import UserProfile from './components/UserProfile';

const cards = [
  {
    building: 'Building A',
    rating: 4.5,
    ratingNum: 120,
    image: 'path/to/imageA.jpg',
  },
  {
    building: 'Building B',
    rating: 4.0,
    ratingNum: 90,
    image: 'path/to/imageB.jpg',
  },
  {
    building: 'Building C',
    rating: 3.5,
    ratingNum: 60,
    image: 'path/to/imageC.jpg',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout cards={cards} />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;