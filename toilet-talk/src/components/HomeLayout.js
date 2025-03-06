import React from 'react';
import BuildingCard from './BuildingCard';
import './HomeLayout.css';

const HomeLayout = ({ cards }) => {
  const handleNavigation = (path) => {
    // Implement navigation logic here, e.g., using React Router
    console.log(`Navigate to ${path}`);
  };

  return (
    <div className="container">
      {/* Nav buttons */}
      <div className="row">
        <button
          type="button"
          onClick={() => handleNavigation('userprofile')}
          className="btn btn-primary btn-circle btn-xl"
          id="circle"
        >
          User Profile
        </button>
        <button
          type="button"
          onClick={() => handleNavigation('chat')}
          className="btn btn-primary btn-lg"
          id="chat"
        >
          Chat
        </button>
      </div>

      {/* Displays building cards */}
      <div className="row text-center">
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <BuildingCard
                building={card.building}
                routerLink={`${card.building}${card.ratingNum}${card.rating}`}
                rating={card.rating}
                ratingNum={card.ratingNum}
                image={card.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeLayout;