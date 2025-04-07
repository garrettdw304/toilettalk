import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Bathroom.css";

const bathroomData = {
  1: { name: "White Hall Floor 3"},
  2: { name: "White Hall Floor 2"},
  3: { name: "White Hall Floor 1"},
  4: { name: "Evansdale Library"},
  5: { name: "HSC Floor 2"},
  6: { name: "Evansdale Crossing Floor 1"},
  7: { name: "Evansdale Crossing Floor 2"},
  6: { name: "Evansdale Crossing Floor 3"},
  7: { name: "Evansdale Crossing Floor 4"},
  6: { name: "Evansdale Crossing Floor 5"}

};

const Bathroom = () => {
  const { id } = useParams();
  const bathroom = bathroomData[id];

  if (!bathroom) return <h2>Bathroom not found!</h2>;

  return (
    <div className="bathroom-container">
      <h2>{bathroom.name}</h2>
      <img src={bathroom.image} alt={bathroom.name} className="bathroom-image" />
      <div className="button-group">
        <Link to="/leave-review">
          <button className="btn">Leave a Review</button>
        </Link>
        <Link to="/maintenance-request">
          <button className="btn">Maintenance Request</button>
        </Link>
      </div>
    </div>
  );
};

export default Bathroom;
