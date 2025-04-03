import React from "react";
import { Link } from "react-router-dom";
import './LandingPg.css'

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="/assets/toilet.jpg" // Replace with the actual path to your logo
          alt="App Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>ToiletTalk</h1>
        <p style={styles.subtitle}>
          Log in to share your thoughts, report issues, and connect with the community.
        </p>
        <div style={styles.buttonContainer}>
          <Link to="/login" className="button" style={styles.button}>
            Login
          </Link>
          <Link to="/createacct" className="button" style={styles.button}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(to bottom right, #a2d9ff, #ffffff)", // Same background as Home
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    position: "relative",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff", // White background for the card
    padding: "3rem",
    borderRadius: "15px", // Rounded corners for the card
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for the card
    width: "80%", // Slightly smaller width for the card
    maxWidth: "500px", // Limit max width
    position: "relative", // Ensure content inside the card stays positioned
  },
  logo: {
    width: "350px", // Adjusted size for better fit
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.5rem", // Slightly smaller title for a balanced design
    fontWeight: "700",
    color: "#333",
    marginBottom: "1.5rem",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)", // Added subtle shadow for depth
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#555",
    marginBottom: "2.5rem",
    maxWidth: "600px",
    margin: "0 auto", // Center the text for better alignment
    lineHeight: "1.6", // Improve readability
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "2rem",
  },
 
};

export default LandingPage;
