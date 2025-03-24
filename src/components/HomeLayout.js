import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BuildingCard from './BuildingCard';
import './HomeLayout.css';

const HomeLayout = ({ cards }) => {
  const location = useLocation();
  const isUserProfile = location.pathname === '/userprofile';

  return (
    <div className={`container ${!isUserProfile ? 'with-background' : ''}`}>

      {/* Building Cards */}
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
