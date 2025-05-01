import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Bathroom.css";

const currentUser = "Emily"; // Replace with actual authentication later

const bathrooms = [
  { id: 1, name: "White Hall Floor 3", image: "/assets/imageA.jpg" },
  { id: 2, name: "White Hall Floor 2", image: "/assets/imageA.jpg" },
  { id: 3, name: "White Hall Floor 1", image: "/assets/imageA.jpg" },
  { id: 4, name: "Evansdale Library Floor 2", image: "/assets/imageA.jpg" },
  { id: 5, name: "HSC Main Building Floor 1", image: "/assets/imageA.jpg" },
  { id: 6, name: "Evansdale Crossing Floor 1", image: "/assets/imageA.jpg" },
  { id: 7, name: "Evansdale Crossing Floor 2", image: "/assets/imageA.jpg" },
  { id: 8, name: "Evansdale Crossing Floor 3", image: "/assets/imageA.jpg" },
  { id: 9, name: "Evansdale Crossing Floor 4", image: "/assets/imageA.jpg" },
  { id: 10, name: "Evansdale Crossing Floor 5", image: "/assets/imageA.jpg" }
];

const hardcodedReviews = [
  { user: "Alex", rating: 5, comment: "Super clean and well-maintained!" },
  { user: "Jamie", rating: 3, comment: "Could use better lighting, but overall decent." },
  { user: "Taylor", rating: 4, comment: "Loved the modern stalls!" }
];

const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return "N/A";
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(1);
};

const Bathroom = ({ reviews }) => {
  const { id } = useParams();
  const bathroom = bathrooms.find(b => b.id === Number(id));
  const navigate = useNavigate(); // ✅ Allows page refresh
  const [reviewList, setReviewList] = useState([...hardcodedReviews, ...(reviews?.[id] || [])]);

  // ✅ Ensures `reviewList` updates when state changes
  useEffect(() => {
    setReviewList([...hardcodedReviews, ...(reviews?.[id] || [])]);
  }, [reviews, id]);

  if (!bathroom) return <h2>Bathroom not found!</h2>;

  return (
    <div>
      <Navbar />
      <div className="bathroom-container">
      <Link to = "/bathroomsearch">
      <button className="back-arrow">←</button>
      </Link>
        <h2>{bathroom.name}</h2>

        {bathroom.image ? (
          <img src={`${process.env.PUBLIC_URL}${bathroom.image}`} alt={bathroom.name} className="bathroom-image" />
        ) : (
          <p className="image-error">Image not available</p>
        )}

        {/* Average Rating Based on All Reviews */}
        <div className="rating">
          {"★".repeat(Math.round(calculateAverageRating(reviewList)))}{"☆".repeat(5 - Math.round(calculateAverageRating(reviewList)))}
          <span className="rating-value">({calculateAverageRating(reviewList)}/5)</span>
        </div>

        <div className="button-group">
          <Link to={`/leave-review/${id}`}>
            <button className="btn">Leave a Review</button>
          </Link>
          <Link to="/maintrequest">
            <button className="btn">Maintenance Request</button>
          </Link>
        </div>

        <div className="pad2"></div>

        {/* Reviews Section */}
        <h3>User Reviews</h3>
        <div className="reviews-container">
          {reviewList.length > 0 ? (
            reviewList.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.user}</strong>
                <div className="review-rating">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
                <p>{review.comment}</p>
                {review.user === currentUser}
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

