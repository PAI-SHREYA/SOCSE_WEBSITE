import React from 'react';
// import './About.css'; // Make sure the CSS file is named 'About.css' and in the same directory

export const About = () => {
  return (
    <div className="home-container" id="home-container">
      
      <section className="home-about" id="home-about">
        <h2 id="about-title">About the Computer Science Association</h2>
        <p id="about-description">
          ACSES is dedicated to fostering a vibrant community of technology enthusiasts. Our mission is to create a platform for students to innovate, share ideas, and grow their skills through a variety of co-curricular activities.
        </p>
        <p id="about-mission">
          We host workshops, hackathons, guest lectures, and coding competitions to encourage practical learning and problem-solving. Our events are designed to bridge the gap between academic theory and real-world application, providing students with the opportunity to engage with industry experts and apply their knowledge in collaborative settings.
        </p>
        <p id="about-activities">
          Whether you're interested in artificial intelligence, web development, or cybersecurity, CSA offers a range of activities to enhance your learning and prepare you for a successful career in computer science.
        </p>
      </section>
    </div>
  );
};
