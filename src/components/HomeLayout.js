import React from "react";
import { Link } from "react-router-dom";
import './HomeLayout.css';

const HomeLayout = () => {
  return (
    <div style={styles.container}>
      <img
        src="/assets/toilet.jpg" // Replace with the actual path to your logo
        alt="App Logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>Welcome to ToiletTalk</h1>
      <p style={styles.subtitle}>
        Share your thoughts, report issues, and connect with the community!
      </p>
      <div style={styles.buttonContainer}>
        <Link to="/building-ratings" className="button">
          Ratings
        </Link>
        <Link to="/" className="button">
          Chat
        </Link>
        <Link to="/maintrequest" className="button">
          Maintenance Request
        </Link>
        <Link to="/userprofile" className="button">
          Profile
        </Link>
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
    background: "linear-gradient(to bottom right, #a2d9ff, #ffffff)",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    position: "relative", // Ensuring container is relative for absolute logo positioning
  },
  logo: {
    width: "300px",
    marginBottom: "15px",
    position: "absolute", // Keeping logo in absolute position
    top: "10%", // Adjust logo position as needed
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#333",
    marginTop: "13rem",
    marginBottom: "1.5rem", // Increased margin to space it out more from subtitle
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "3rem", // Increased margin to create more space between subtitle and buttons
    textAlign: "center",
    maxWidth: "600px", // Ensuring subtitle doesn't stretch too wide
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "3rem", // Increased margin-top to shift buttons further down
  },
};


export default HomeLayout;
