import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./LeaveReview.css";
import api from "../api"

const LeaveReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const state = useLocation().state;
  const [review, setReview] = useState({ rating: 5, comment: "" });
  const [bathroom, setBathroom] = useState(null)

  useEffect(() => {
    if (!state)
      navigate("/");

    api.post('/getBathroomWithReviews/', {
      page: 1,
      bathroomid: id
    }).then((res) => {
      console.log(res.data)
      setBathroom(res.data)
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/createReview/', {
      accessToken: state.accessToken,
      bathroomid: bathroom.bathroomid,
      rating: review.rating,
      review: review.comment
    }).then((res) => {
      console.log(res.data)
      setBathroom(res.data)
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
    navigate(`/bathroom/${id}`, { state: state });
  };

  const handleBackClick = () => {
    navigate(`/bathroom/${id}`, { state: state });
  };

  // Handle star click
  const handleStarClick = (rating) => {
    setReview({ ...review, rating });
  };

  if (!bathroom) return <>Loading...</>

  return (
    <div className="leave-review-container">
      {/* Back Arrow */}
      <button className="back-arrow" onClick={handleBackClick}>←</button>

      <h2>Leave a Review for {bathroom.name}</h2>
      <form onSubmit={handleSubmit} className="review-form">
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



