import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./BuildingReviewCard.css";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api'

const BuildingRatings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [selectedBuilding, setSelectedBuilding] = useState("All");
  const [buildingsWithBathrooms, setBuildingsWithBathrooms] = useState([]);

  const filteredBathrooms = selectedBuilding === "All" 
    ? buildingsWithBathrooms.flatMap((building) => building.bathrooms.map((bathroom) => ({ ...bathroom, building: building.name })))
    : buildingsWithBathrooms.find((building) => building.name === selectedBuilding)?.bathrooms.map((bathroom) => ({ ...bathroom, building: selectedBuilding })) || [];

  const onViewDetails = (bathroom) => {
    navigate(`/bathroom/${bathroom.bathroomid}`, { state: state })
  }

  useEffect(() => {
    api.post('/getBuildingsWithBathrooms/', {
      page: 1
    }).then((res) => {
      console.log(res.data)
      setBuildingsWithBathrooms(res.data)
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
  }, [])

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
          {buildingsWithBathrooms.map((building) => (
            <option key={building.name} value={building.name}>{building.name}</option>
          ))}
        </select>

        <p></p>

        {/* Bathroom Rating Cards */}
        <div className="all-bathrooms-cards">
          {filteredBathrooms.map((bathroom) => (
            <div key={bathroom.bathroomid} className="all-bathrooms-card">
              <h3 className="all-bathrooms-card-title">{bathroom.building} - {bathroom.name}</h3>
              <img src={"/assets/imageA.jpg"} alt={bathroom.name} className="all-bathrooms-card-image" />
              <p className="all-bathrooms-water-fountain">Water Fountain: {true ? "✅" : "❌"}</p>
              <div className="all-bathrooms-rating">
                {"★".repeat(Math.round(bathroom.average))}
                {"☆".repeat(5 - Math.round(bathroom.average))}
                <span className="all-bathrooms-rating-value">({bathroom.average.toFixed(1)}/5)</span>
              </div>
              <button onClick={() => onViewDetails(bathroom)}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingRatings;