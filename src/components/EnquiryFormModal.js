
import React from "react";
import "./EnquiryFormModal.css"; 

const EnquiryFormModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-content">
          
          

          <div className="right-panel">
            <img src="images/logo.png" alt="Logo" className="logo" />
            <p className="presented">
              Presented by <strong>Sun Realty</strong> – Authorized Channel Partner of Runwal Group
            </p>
            <h2>ENQUIRE NOW</h2>

            <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" name="name" required />
              <input type="email" placeholder="Your Email" name="email" required />
              <div className="phone-input">
                <span>+91</span>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <button type="submit" className="btn-offer">Get Offer Now</button>
              <button type="button" className="btn-info">
                Get Information on Availabilities
              </button>
            </form>

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryFormModal;
