import React from 'react';
import './AreaPricing.css';

const AreaPricing = ({ openPopup }) => {
  const handleEnquireClick = () => {
    if (openPopup) openPopup(); 
  };

  return (
    <section className="area-pricing">
      <h2>Area & Pricing</h2>
      <hr />
      <div className="cards">
        <div className="card">
          <h3>3 BHK</h3>
          <p className="size">1738 Sq.Ft. – 1979 Sq.Ft.</p>
          <p className="price">Rs. 10.99 Cr*</p>
          <button className="pricing-btn" onClick={handleEnquireClick}>
            Complete Costing Details
          </button>
        </div>

        <div className="card">
          <h3>4 BHK</h3>
          <p className="size">2208 Sq.Ft. – 2508 Sq.Ft.</p>
          <p className="price">Rs. 13.99 Cr*</p>
          <button className="pricing-btn" onClick={handleEnquireClick}>
            Complete Costing Details
          </button>
        </div>

        <div className="card">
          <h3>5 BHK</h3>
          <p className="size">4000 Sq.Ft. – 4500 Sq.Ft.</p>
          <p className="price">Price on Request</p>
          <button className="pricing-btn" onClick={handleEnquireClick}>
            Price on Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default AreaPricing;
