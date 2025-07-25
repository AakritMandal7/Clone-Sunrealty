import React, { useState, useEffect } from "react";
import "./LocationTabs.css";

const LocationTabs = ({ openPopup }) => {
  const tabs = [
    {
      name: "Connectivity",
      locations: [
        "Bandra-Worli Sea Link – 4 Km",
        "Worli Sea Face – 1.5 Km",
        "Eastern Freeway – 5.5 Km",
      ],
    },
    {
      name: "Schools & Colleges",
      locations: [
        "Reputed School A – 2 Km",
        "Esteemed College B – 3.5 Km",
        "International School C – 4 Km",
        "Community College D – 2.5 Km",
      ],
    },
    {
      name: "Hospitals",
      locations: [
        "Multi-specialty Hospital X – 1 Km",
        "Advanced Clinic Y – 2.2 Km",
        "General Hospital Z – 3 Km",
      ],
    },
    {
      name: "Malls",
      locations: [
        "Grand Shopping Mall P – 4 Km",
        "Lifestyle Center Q – 3 Km",
        "City Plaza R – 5 Km",
      ],
    },
    {
      name: "Business Hubs",
      locations: [
        "Tech Park Alpha – 5 Km",
        "Commercial Complex Beta – 6 Km",
        "Business District Gamma – 4.5 Km",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeLocations = tabs.find((tab) => tab.name === activeTab).locations;

  return (
    <div className="location-tabs">
      <h2 className="location-title">Prime Location Advantages</h2>

      {isMobile ? (
        <select
          className="tab-dropdown"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      ) : (
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`tab ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}

      <div className="tab-content">
        <ul>
          {activeLocations.map((loc, index) => (
            <li key={index}>{loc}</li>
          ))}
        </ul>
      </div>

      <button className="request-button" onClick={openPopup}>
        Request Location Details
      </button>
    </div>
  );
};

export default LocationTabs;
