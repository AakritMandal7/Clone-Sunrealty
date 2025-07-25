import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src="/images/logo.png" alt="Runwal Logo" className="footer-logo" />
      </div>

      <p className="disclaimer">
        Disclaimer: Sun Realty is an authorized channel partner for Runwal Raaya.
        All project images are for representation purposes only and subject to change.
        All details are sourced from the developer.
      </p>

      <p className="rera">
        RERA No: <strong>A51900038861</strong> | Project MahaRERA No. – <strong>P51900080218</strong><br />
        (<a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noreferrer">https://maharera.maharashtra.gov.in/</a>)
      </p>

      <div className="footer-links">
        <a href="#">About Us</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Terms & Conditions</a>
        <span>|</span>
        <a href="#">Contact Info</a>
      </div>

      <p className="copyright">
        All Rights Reserved. © 2025 Method & Madness Technology Pvt. Ltd
      </p>
    </footer>
  );
};

export default Footer;
