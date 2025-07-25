import React from 'react';
import './PlanLayout.css';

const PlanLayout = ({ openPopup }) => {
  return (
    <section className="plan-layout">
      <div className="plan-block">
        <h2 className="plan-title">Master Plan Layout</h2>
        <hr className="plan-divider" />

        <div className="plan-card" onClick={openPopup}>
          <img src="/images/master.jpg" alt="Master Plan" className="plan-image" />
          <div className="plan-overlay">
            Request Master Plan Layout
          </div>
        </div>

        <button className="plan-btn" onClick={openPopup}>
          Request Master Plan Layout
        </button>
      </div>

      <div className="plan-block">
        <h2 className="plan-title">Unit Plan Layout</h2>
        <hr className="plan-divider" />

        <div className="plan-card" onClick={openPopup}>
          <img src="/images/]unit.jpg" alt="Unit Plan" className="plan-image" />
          <div className="plan-overlay">
            Request Unit Plan Layout
          </div>
        </div>

        <button className="plan-btn" onClick={openPopup}>
          Request Unit Plan Layout
        </button>
      </div>
    </section>
  );
};

export default PlanLayout;
