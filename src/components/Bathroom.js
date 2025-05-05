import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Bathroom.css";
import api from "../api"

const Bathroom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const state = useLocation().state;
  const [bathroom, setBathroom] = useState([]);

  useEffect(() => {
    api.post('/getBathroomWithReviews/', {
      page: 1,
      bathroomid: id
    }).then((res) => {
      console.log(res.data)
      setBathroom(res.data)
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
  }, []);

  const onLeaveAReview = () => {
    navigate(`/leave-review/${id}`, { state: state })
  }

  const onMaintenanceRequest = () => {
    navigate("/maintrequest", { state: state })
  }

  if (!bathroom || !bathroom.reviews) return <h2>Bathroom not found!</h2>;

  return (
    <div>
      <Navbar />
      <div className="bathroom-container">
        <Link to="/bathroomsearch">
          <button className="back-arrow">←</button>
        </Link>
        {/* Updated name format */}
        <h2>{bathroom.buildingName} - {bathroom.name}</h2>

        {true ? (
          <img src={`${process.env.PUBLIC_URL}${"/assets/imageA.jpg"}`} alt={`${bathroom.buildingName} ${bathroom.bathroomName}`} className="bathroom-image" />
        ) : (
          <p className="image-error">Image not available</p>
        )}

        {/* Water Fountain Availability */}
        <p className="water-fountain-info">
          Water Fountain: {true ? "✅ Available" : "❌ Not Available"}
        </p>

        {/* Average Rating Based on All Reviews */}
        <div className="rating">
          {"★".repeat(Math.round(bathroom.average))}{"☆".repeat(5 - Math.round(bathroom.average))}
          <span className="rating-value">({bathroom.average.toFixed(2)}/5)</span>
        </div>

        <div className="button-group">
          <button onClick={onLeaveAReview}>Leave A Review</button>
          <button onClick={onMaintenanceRequest}>Maintenance Request</button>
        </div>

        <div className="pad2"></div>

        {/* Reviews Section */}
        <h3>User Reviews</h3>
        <div className="reviews-container">
          {bathroom.reviews.length > 0 ? (
            bathroom.reviews.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.username}</strong>
                <div className="review-rating">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
                <p>{review.review}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bathroom;
