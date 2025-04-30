import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LeaveReview.css";

const bathrooms = [
  { id: 1, name: "White Hall Floor 3" },
  { id: 2, name: "White Hall Floor 2" },
  { id: 3, name: "White Hall Floor 1" },
  { id: 4, name: "Evansdale Library Floor 2" },
  { id: 5, name: "HSC Main Building Floor 1" },
  { id: 6, name: "Evansdale Crossing Floor 1" },
  { id: 7, name: "Evansdale Crossing Floor 2" },
  { id: 8, name: "Evansdale Crossing Floor 3" },
  { id: 9, name: "Evansdale Crossing Floor 4" },
  { id: 10, name: "Evansdale Crossing Floor 5" }
];

const LeaveReview = ({ addReview }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ user: "Emily", rating: 1, comment: "" });

  // Find the bathroom name based on the ID
  const bathroom = bathrooms.find(b => b.id === Number(id));
  const bathroomName = bathroom ? bathroom.name : "Bathroom Not Found"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(id, review);
    navigate(`/bathroom/${id}`);
  };

  const handleBackClick = () => {
    navigate(`/bathroom/${id}`);
  };

  // Handle star click
  const handleStarClick = (rating) => {
    setReview({ ...review, rating });
  };

  return (
    <div className="leave-review-container">
      {/* Back Arrow */}
      <button className="back-arrow" onClick={handleBackClick}>←</button>

      <h2>Leave a Review for {bathroomName}</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>Name:</label>
        <input 
          type="text" 
          value={review.user} 
          onChange={(e) => setReview({ ...review, user: e.target.value })}
          required
        />

        <label>Rating:</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(num => (
            <span
              key={num}
              className={num <= review.rating ? "filled-star" : "empty-star"}
              onClick={() => handleStarClick(num)}
            >
              ★
            </span>
          ))}
        </div>

        <label>Comment:</label>
        <textarea 
          value={review.comment} 
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          required
        />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default LeaveReview;



