
import React, { useState } from "react";
import './Header.css';
import {
  FaHome,
  FaWifi,
  FaDownload,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaTh,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Header = ({
  scrollToHero,
  scrollToProjectDetails,
  scrollToAreaPricing,
  scrollToPlanLayout,
  scrollToLocationMap,
  scrollToFooter,
  scrollToAmenities,
  openPopup, 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (scrollFunction) => {
    scrollFunction();
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="images/logo.png" alt="Runwal Realty" className="logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => handleNavClick(scrollToHero)}><FaHome /> Home</button>
        <button onClick={() => handleNavClick(scrollToAreaPricing)}><FaRupeeSign /> Price</button>
        <button onClick={() => handleNavClick(scrollToPlanLayout)}><FaTh /> Site Plan</button>
        <button onClick={() => handleNavClick(scrollToAmenities)}><FaWifi /> Amenities</button>
        <button onClick={() => handleNavClick(scrollToLocationMap)}><FaMapMarkerAlt /> Location</button>
        <button onClick={openPopup} ><FaDownload /> Brochure</button>
      </nav>

      
      <button className="enquire-btn desktop-only" onClick={openPopup} >Enquire Now</button>
    </header>
  );
};

export default Header;
