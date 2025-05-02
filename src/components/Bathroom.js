import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Bathroom.css";

const currentUser = "Emily"; // Replace with actual authentication later

const bathrooms = [
  { id: 1, buildingName: "White Hall", bathroomName: "Floor 3", image: "/assets/imageA.jpg", waterFountain: true },
  { id: 2, buildingName: "White Hall", bathroomName: "Floor 2", image: "/assets/imageA.jpg", waterFountain: true },
  { id: 3, buildingName: "White Hall", bathroomName: "Floor 1", image: "/assets/imageA.jpg", waterFountain: true },
  { id: 4, buildingName: "Evansdale Library", bathroomName: "Floor 2", image: "/assets/imageA.jpg", waterFountain: false },
  { id: 5, buildingName: "HSC Main Building", bathroomName: "Floor 1", image: "/assets/imageA.jpg", waterFountain: true },
  { id: 6, buildingName: "Evansdale Crossing", bathroomName: "Floor 1", image: "/assets/imageA.jpg", waterFountain: false },
  { id: 7, buildingName: "Evansdale Crossing", bathroomName: "Floor 2", image: "/assets/imageA.jpg", waterFountain: true },
  { id: 8, buildingName: "Evansdale Crossing", bathroomName: "Floor 3", image: "/assets/imageA.jpg", waterFountain: false },
  { id: 9, buildingName: "Evansdale Crossing", bathroomName: "Floor 4", image: "/assets/imageA.jpg", waterFountain: true },
  { id: 10, buildingName: "Evansdale Crossing", bathroomName: "Floor 5", image: "/assets/imageA.jpg", waterFountain: false }
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
  const navigate = useNavigate(); 
  const [reviewList, setReviewList] = useState([...hardcodedReviews, ...(reviews?.[id] || [])]);

  useEffect(() => {
    setReviewList([...hardcodedReviews, ...(reviews?.[id] || [])]);
  }, [reviews, id]);

  if (!bathroom) return <h2>Bathroom not found!</h2>;

  return (
    <div>
      <Navbar />
      <div className="bathroom-container">
        <Link to="/bathroomsearch">
          <button className="back-arrow">←</button>
        </Link>
        {/* Updated name format */}
        <h2>{bathroom.buildingName} - {bathroom.bathroomName}</h2>

        {bathroom.image ? (
          <img src={`${process.env.PUBLIC_URL}${bathroom.image}`} alt={`${bathroom.buildingName} ${bathroom.bathroomName}`} className="bathroom-image" />
        ) : (
          <p className="image-error">Image not available</p>
        )}

        {/* Water Fountain Availability */}
        <p className="water-fountain-info">
          Water Fountain: {bathroom.waterFountain ? "✅ Available" : "❌ Not Available"}
        </p>

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
