import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./MaintRequest.css";

const MaintRequest = () => {
  const [formData, setFormData] = useState({
    email: "",
    probType: "",
    probLocation: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vkjdja5", // Replace with your EmailJS service ID
        "template_10a2ocv", // Replace with your EmailJS template ID
        {
          email: formData.email,
          probType: formData.probType,
          probLocation: formData.probLocation,
          message: formData.message,
        },
        "E8GLooyL-FfIkw07I" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the email.");
        }
      );
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">Bathroom Maintenance Request</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Problem Location:</label>
            <select
              name="probLocation"
              value={formData.probLocation}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              <option value="Bathroom 1">Bathroom 1</option>
              <option value="Bathroom 2">Bathroom 2</option>
              <option value="Bathroom 3">Bathroom 3</option>
              <option value="Bathroom 4">Bathroom 4</option>
            </select>
          </div>

          <div className="form-group">
            <label>Problem Type:</label>
            <select
              name="probType"
              value={formData.probType}
              onChange={handleChange}
              required
            >
              <option value="">Select Problem Type</option>
              <option value="Clogged Toilet">Clogged Toilet</option>
              <option value="Broken Sink">Broken Sink</option>
              <option value="No Soap">No Soap</option>
              <option value="No Paper Towels">No Paper Towels</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="submit-btn" type="submit">Send Report</button>
        </form>
      </div>
    </div>
  );
};

export default MaintRequest;