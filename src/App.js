import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectDetails from './components/ProjectDetails';
import AreaPricing from './components/AreaPricing';
import Amenities from './components/Amenities';
import PlanLayout from './components/PlanLayout';
import LocationMap from './components/Locationmap';
import LocationTabs from './components/LocationsTabs';
import Footer from './components/Footer';
import EnquiryFormModal from './components/EnquiryFormModal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const heroRef = useRef(null);
  const projectDetailsRef = useRef(null);
  const areaPricingRef = useRef(null);
  const planLayoutRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationMapRef = useRef(null);
  const locationTabsRef = useRef(null);
  const footerRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div>
      <Header
        scrollToHero={() => scrollTo(heroRef)}
        scrollToProjectDetails={() => scrollTo(projectDetailsRef)}
        scrollToAreaPricing={() => scrollTo(areaPricingRef)}
        scrollToAmenities={() => scrollTo(amenitiesRef)}
        scrollToPlanLayout={() => scrollTo(planLayoutRef)}
        scrollToLocationMap={() => scrollTo(locationMapRef)}
        scrollToLocationTabs={() => scrollTo(locationTabsRef)}
        scrollToFooter={() => scrollTo(footerRef)}
        openPopup={openPopup}
      />

      <div ref={heroRef}><Hero openPopup={openPopup} /></div>
      <div ref={projectDetailsRef}><ProjectDetails openPopup={openPopup} /></div>
      <div ref={areaPricingRef}><AreaPricing openPopup={openPopup} /></div>
      <div ref={planLayoutRef}><PlanLayout openPopup={openPopup} /></div>
      <div ref={amenitiesRef}><Amenities openPopup={openPopup} /></div>
      <div ref={locationMapRef}><LocationMap openPopup={openPopup} /></div>
      <div ref={locationTabsRef}><LocationTabs openPopup={openPopup} /></div>
      <div ref={footerRef}><Footer openPopup={openPopup} /></div>

      <EnquiryFormModal show={showPopup} onClose={closePopup} />
    </div>
  );
}

export default App;
