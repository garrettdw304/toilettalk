import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BathroomSearch.css";
import Navbar from "./Navbar";

const bathrooms = [
  { id: 1, name: "White Hall Floor 3", image: "assets/imageA.jpg" },
  { id: 2, name: "White Hall Floor 2", image: "path/to/image2.jpg" },
  { id: 3, name: "White Hall Floor 1", image: "path/to/image3.jpg" },
  { id: 4, name: "Evansdale Library Floor 2", image: "path/to/image4.jpg" },
  { id: 5, name: "HSC Main Building Floor 1", image: "path/to/image5.jpg" },
  { id: 6, name: "Evansdale Crossing Floor 1", image: "path/to/image6.jpg" },
  { id: 7, name: "Evansdale Crossing Floor 2", image: "path/to/image7.jpg" },
  { id: 8, name: "Evansdale Crossing Floor 3", image: "path/to/image8.jpg" },
  { id: 9, name: "Evansdale Crossing Floor 4", image: "path/to/image9.jpg" },
  { id: 10, name: "Evansdale Crossing Floor 5", image: "path/to/image10.jpg" },

];

const BathroomSearch = () => {
    const [query, setQuery] = useState("");
    const filteredBathrooms = bathrooms.filter((bathroom) =>
      bathroom.name.toLowerCase().includes(query.toLowerCase())
    );
  

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
              filteredBathrooms.map((bathroom) => (
                <Link key={bathroom.id} to={`/bathroom/${bathroom.id}`} className="suggestion-item">
                  {bathroom.name}
                </Link>
              ))}
            </div>
           </div>
           <p></p>
           <p></p>
           <p></p>
           <div>
        <Link to="/building-ratings" className="button">
            View All Ratings
          </Link>
        </div>
          </div>
        </div>
      );
    };
    
    export default BathroomSearch;
