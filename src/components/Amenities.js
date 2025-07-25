
import React, { useRef } from "react";
import Slider from "react-slick";
import "./Amenities.css";

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>&#10095;</div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>&#10094;</div>
);

const amenitiesData = [
  { title: "Kid Play Area", icon: process.env.PUBLIC_URL + "/images/kid.jpg" },
  { title: "Gym", icon: process.env.PUBLIC_URL + "/images/]Gym.jpg" },
  { title: "Club House", icon: process.env.PUBLIC_URL + "/images/Clubhouse.jpg" },
  { title: "Swimming Pool", icon: process.env.PUBLIC_URL + "/images/Swimming.png" },
  { title: "Tennis Court", icon: process.env.PUBLIC_URL + "/images/TennisCourt.jpg" },
  { title: "Yoga Deck", icon: process.env.PUBLIC_URL + "/images/Yogadeck.png" },
  { title: "2.4 Acre Of Green", icon: process.env.PUBLIC_URL + "/images/24ACRE.png" },
];

const Amenities = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }, // Hide arrows on small screen
    ],
  };

  return (
    <section className="amenities-section">
      <h2 className="section-title">Our Amenities</h2>

      <Slider {...settings} ref={sliderRef}>
        {amenitiesData.map((item, index) => (
          <div className="amenity-card" key={index}>
            <img src={item.icon} alt={item.title} className="amenity-icon" />
            <h4 className="amenity-title">{item.title}</h4>
          </div>
        ))}
      </Slider>

      
    </section>
  );
};

export default Amenities;
