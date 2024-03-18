import React from 'react';
import './Footer.css'; // Ensure the CSS file is named 'Footer.css' and in the same directory

export const Footer = () => {
  return (
    <footer className="footer-container" id="footer-container">
      <div className="footer-content" id="footer-content">
        <p id="footer-text">© 2024 SOCSE Computer Science Association. All rights reserved.</p>
        <div className="footer-links" id="footer-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" id="footer-twitter">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" id="footer-facebook">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id="footer-linkedin">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id="footer-instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
