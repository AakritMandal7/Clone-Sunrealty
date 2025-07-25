import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <section className="location-section">
      <h2 className="location-title">Location Advantages</h2>
      <hr className="location-divider" />

      <div className="map-container small-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.488429551902!2d72.8198868739416!3d18.99818728219044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60f42723070d171b%3A0xa9d873758ff2e7d5!2sRaaya%20by%20Runwal!5e0!3m2!1sen!2sin!4v1753398790120!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Raaya by Runwal Location"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
