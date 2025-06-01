import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About  India Tourism Explorer</h1>
      <p className="about-description">
        Welcome to the Incredible India Tourism Explorer! This platform is designed to help you visualize and understand the diverse tourism patterns across different Indian states and union territories.
      </p>

      <p className="about-description">
        Our mission is to promote cultural awareness and responsible travel by providing accurate, data-driven insights into India's domestic and foreign tourist activities. All data is sourced from the official government API at <a href="https://data.gov.in/" target="_blank" rel="noopener noreferrer">data.gov.in</a>, ensuring authenticity and transparency.
      </p>

      <p className="about-description">
        Whether you're a traveler planning your next destination, a researcher exploring tourism trends, or a policymaker crafting development strategies — this tool empowers you with meaningful visual data.
      </p>

      <h2 className="about-subtitle">Key Features:</h2>
      <ul className="about-list">
        <li>📊 Interactive charts for domestic and foreign tourism data</li>
        <li>🌍 State-wise percentage share visualization</li>
        <li>📌 Clean UI for effortless navigation and exploration</li>
        <li>🔗 Reliable open government data integration</li>
      </ul>

      <p className="about-footer-note">
        Made with ❤️ using React and Recharts.
      </p>
    </div>
  );
};

export default About;
