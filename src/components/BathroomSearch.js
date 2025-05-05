import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./BathroomSearch.css";
import Navbar from "./Navbar";
import api from "../api"

const BathroomSearch = () => {
    const state = useLocation().state;
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [buildings, setBuildings] = useState([])
    const filteredBathrooms = buildings.filter((building) =>
      building.bathrooms.filter((bathroom) =>
        `${building.name} ${bathroom.name}`.toLowerCase().includes(query.toLowerCase()))
    );

    const onViewBuildingRatings = () => {
      navigate("/building-ratings", { state: state})
    }

    useEffect(() => {
      api.post('/getBuildingsWithBathrooms/', {
        page: 1
      }).then((res) => {
        console.log(res.data)
        setBuildings(res.data)
      }).catch((err) => {
        alert("Error: " + err.response.data.error)
      })
    }, [])

    return (
        <div>
        <Navbar />
        <div className="container">
        <div className="search-container">
          <h2>Search for a Bathroom</h2>
          <input
            type="text"
            placeholder="Start typing..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <div className="suggestions">
            {query &&
              filteredBathrooms.map((building) => building.bathrooms.map((bathroom) => (
                <Link key={building.bathroomid} to={`/bathroom/${bathroom.bathroomid}`} className="suggestion-item">
                  {building.name} - {bathroom.name}
                </Link>
              )))}
            </div>
           </div>
           <p></p>
           <p></p>
           <p></p>
        <div>
          <button className="button" onClick={onViewBuildingRatings}>View Building Ratings</button>
        </div>
          </div>
        </div>
      );
    };

export default BathroomSearch;
