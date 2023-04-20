import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
  
    // Send email using name, email, and message
    event.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    try {
      await fetch("https://formspree.io/f/myyabalv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div style={{backgroundColor:'white'}} className="contact-container">
      <div className="form-container">
        <h5>Contact Me</h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div style={{color:'black', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor:'white', borderRadius:'8px', paddingTop:'5em', height: '15em', marginTop:'5em'}} className="info-container">
        <h5 style={{textAlign:'center'}}>Connect With Me</h5>
        <div className="icon-container">
          <FaEnvelope className="icon" />
          <a href="mailto:ibesarah01@gmail.com">ibesarah01@gmail.com</a>
        </div>
        <div className="icon-container">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/ibe-sarah-42a77b1ba">Ibe Sarah</a>
        </div>
        <div className="icon-container">
          <FaMapMarkerAlt style={{marginTop:'-0.9em'}} className="icon" />
          <p style={{color:'black'}}>Lagos, Nigeria.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
