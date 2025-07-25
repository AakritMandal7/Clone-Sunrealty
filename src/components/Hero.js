import React from 'react';
import './Hero.css';

const HeroSection = ({ openPopup }) => {
  return (
    <div className="hero-container">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="hero-text">
        <h1 class= "heroh1">RUNWAL RAAYA</h1>
        <p>Experience unparalleled luxury at our forest-themed residences in Worli, Mumbai.</p>
        <button className="cta-button" onClick={openPopup}>Explore Residences</button>
      </div>

  
      <div className="property-card">
        <h1 className="property-title">RUNWAL RAAYA</h1>
        <p className="property-location">Worli, Mumbai</p>

        <div className="property-stats">
          <div className="stat">
            <span>Land Parcel</span>
            <strong>4.2 Acres</strong>
          </div>
          <div className="stat">
            <span>Floors</span>
            <strong>72 Storey</strong>
          </div>
        </div>

        <div className="property-features">
          <p>Exclusive Payment Plan</p>
          <p>Panoramic Views of Sea Link</p>
          <p>Views of Mahalaxmi Racecourse</p>
          <p>Exclusive Lobby & Private Elevator</p>
        </div>

        <div className="property-pricing">
          <p className="bhk-title">Exclusive 3, 4 & 5 BHK Homes</p>
          <p className="price">
            <span className="amount">Rs. 10.99 Cr</span><sup>*</sup> <span className="onwards">Onwards</span>
          </p>
        </div>

        <button className="enquire-button" onClick={openPopup}>Enquire Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
