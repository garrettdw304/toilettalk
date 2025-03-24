import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import "./BuildingReviewCard.css"; // Add your custom CSS here

const buildings = [
  {
    name: "White Hall Floor 3",
    waterFountain: true,
    averageScore: 3,
    image: "path/to/image.jpg",
  },
  {
    name: "White Hall Floor 2",
    waterFountain: true,
    averageScore: 4.5,
    image: "path/to/image.jpg",
  },
  {
    name: "White Hall Floor 1",
    waterFountain: true,
    averageScore: 2.5,
    image: "path/to/image.jpg",
  },
];

const BuildingRatings = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <h1>Toilet Talk</h1>
      </header>
      <div className="building-info">
        <img src="path/to/white-hall.jpg" alt="White Hall" className="building-image" />
        <div className="building-details">
          <h2>White Hall</h2>
          <p>Downtown Campus</p>
          <p>Overall cleanliness compiled from 3 ratings</p>
        </div>
        <div className="overall-rating">
          <h3>Overall Rating</h3>
          <div className="rating-score">3.33</div>
        </div>
      </div>
      <div className="building-cards">
        {buildings.map((building, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h3 className="card-title">{building.name}</h3>
              <p>Water Fountain: {building.waterFountain ? "true" : "false"}</p>
              <p>Average score: {building.averageScore}</p>
              <Link to={`/building/${index}`}>
                <button className="btn btn-primary">Go!</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingRatings;