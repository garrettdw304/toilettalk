import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./BuildingReviewCard.css";

const buildings = [
  {
    name: "White Hall",
    bathrooms: [
      { id: 1, floor: 3, name: "Floor 3", image: "/assets/imageA.jpg", averageScore: 3, waterFountain: true },
      { id: 2, floor: 2, name: "Floor 2", image: "/assets/imageA.jpg", averageScore: 4.5, waterFountain: true },
      { id: 3, floor: 1, name: "Floor 1", image: "/assets/imageA.jpg", averageScore: 2.5, waterFountain: true }
    ]
  },
  {
    name: "Evansdale Library",
    bathrooms: [
      { id: 4, floor: 2, name: "Floor 2", image: "/assets/imageA.jpg", averageScore: 4.2, waterFountain: false }
    ]
  },
  {
    name: "HSC Main Building",
    bathrooms: [
      { id: 5, floor: 1, name: "Floor 1", image: "/assets/imageA.jpg", averageScore: 3.8, waterFountain: true }
    ]
  },
  {
    name: "Evansdale Crossing",
    bathrooms: [
      { id: 6, floor: 1, name: "Floor 1", image: "/assets/imageA.jpg", averageScore: 3.5, waterFountain: false },
      { id: 7, floor: 2, name: "Floor 2", image: "/assets/imageA.jpg", averageScore: 4, waterFountain: true },
      { id: 8, floor: 3, name: "Floor 3", image: "/assets/imageA.jpg", averageScore: 3.7, waterFountain: false },
      { id: 9, floor: 4, name: "Floor 4", image: "/assets/imageA.jpg", averageScore: 3.9, waterFountain: true },
      { id: 10, floor: 5, name: "Floor 5", image: "/assets/imageA.jpg", averageScore: 4.1, waterFountain: false }
    ]
  }
];

const BuildingRatings = () => {
  const [selectedBuilding, setSelectedBuilding] = useState("All");

  const filteredBathrooms = selectedBuilding === "All" 
    ? buildings.flatMap((building) => building.bathrooms.map((bathroom) => ({ ...bathroom, building: building.name })))
    : buildings.find((building) => building.name === selectedBuilding)?.bathrooms.map((bathroom) => ({ ...bathroom, building: selectedBuilding })) || [];

  return (
    <div className="all-bathrooms-container">
      <Navbar />
      <div className="all-bathrooms-content">
        <h2 className="all-bathrooms-title">Average Bathroom Ratings</h2>
      <p></p>
        {/* Dropdown to Filter by Building */}
        <label className="all-bathrooms-label">Select Building:</label>
        <select 
          className="all-bathrooms-dropdown"
          onChange={(e) => setSelectedBuilding(e.target.value)}
          value={selectedBuilding}
        >
          <option value="All">All Buildings</option>
          {buildings.map((building) => (
            <option key={building.name} value={building.name}>{building.name}</option>
          ))}
        </select>

        <p></p>

        {/* Bathroom Rating Cards */}
        <div className="all-bathrooms-cards">
          {filteredBathrooms.map((bathroom) => (
            <div key={bathroom.id} className="all-bathrooms-card">
              <h3 className="all-bathrooms-card-title">{bathroom.building} - {bathroom.name}</h3>
              <img src={bathroom.image} alt={bathroom.name} className="all-bathrooms-card-image" />
              <p className="all-bathrooms-water-fountain">Water Fountain: {bathroom.waterFountain ? "✅" : "❌"}</p>
              <div className="all-bathrooms-rating">
                {"★".repeat(Math.round(bathroom.averageScore))}
                {"☆".repeat(5 - Math.round(bathroom.averageScore))}
                <span className="all-bathrooms-rating-value">({bathroom.averageScore.toFixed(1)}/5)</span>
              </div>
              <Link to={`/bathroom/${bathroom.id}`}>
                <button className="all-bathrooms-btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingRatings;