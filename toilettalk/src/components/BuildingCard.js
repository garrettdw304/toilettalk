import React from 'react';
import './BuildingCard.css';

const BuildingCard = ({ building, routerLink, rating, ratingNum, image }) => {
  return (
    <div className="building-card">
      <img src={image} alt={building} />
      <h3>{building}</h3>
      <p>Rating: {rating}</p>
      <p>Rating Number: {ratingNum}</p>
      {/* Implement routing logic here if needed */}
    </div>
  );
};

export default BuildingCard;