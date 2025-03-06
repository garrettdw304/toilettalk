import React from 'react';
import './App.css';
import HomeLayout from './components/HomeLayout';

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
    <div className="App">
      <main>
        <HomeLayout cards={cards} />
      </main>
    </div>
  );
}

export default App;