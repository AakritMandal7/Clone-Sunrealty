import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ openPopup }) => {
  return (

    <section className="project-details">
        <div className="project-image">
        <img src="/images/tower.jpg" alt="Runwal Raaya" />
      </div> 
      <div className="project-text">
        <h2>Runwal Raaya</h2>
        <hr />
        <p>
          Runwal Raaya by Runwal Realty is a premium residential development
          situated in the prime locale of Worli, Mumbai. This prestigious
          project offers a refined selection of spacious 3, 4 & 5 BHK Homes,
          thoughtfully crafted to complement modern urban lifestyles.
          Every residence at Runwal Raaya combines elegant design,
          superior functionality, and everyday comfort, making it an ideal home
          for those who appreciate luxury and convenience.
        </p>
        <a href="#" className="read-more">Read more</a>
        <div className="button-wrapper">
          <button className="brochure-btn" onClick={openPopup}>
            <span className="download-icon">📥</span> Request Brochure
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default ProjectDetails;
