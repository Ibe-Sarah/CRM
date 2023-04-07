import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using name, email, and message
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Contact Me</h2>
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
      <div className="info-container">
        <h2>Connect With Me</h2>
        <div className="icon-container">
          <FaEnvelope className="icon" />
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
        <div className="icon-container">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/your-linkedin-account/">Your LinkedIn Account</a>
        </div>
        <div className="icon-container">
          <FaMapMarkerAlt className="icon" />
          <p>Your Location</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
