import React, { useState } from "react";
import emailjs from "emailjs-com";


const ReportEmail = () => {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   report: "",
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
         name: formData.name,
         email: formData.email,
         report: formData.report,
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
   <div>
     <h1>Send Report Email</h1>
     <form onSubmit={sendEmail}>
       <div>
         <label>Name:</label>
         <input
           type="text"
           name="name"
           value={formData.name}
           onChange={handleChange}
           required
         />
       </div>
       <div>
         <label>Email:</label>
         <input
           type="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           required
         />
       </div>
       <div>
         <label>Report:</label>
         <textarea
           name="report"
           value={formData.report}
           onChange={handleChange}
           required
         ></textarea>
       </div>
       <button type="submit">Send Report</button>
     </form>
   </div>
 );
};


export default ReportEmail;
