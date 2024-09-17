// src/components/TourCard.js
import React from 'react';
import './TourCard.css';

const TourCard = ({ image, title, location, rating }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={title} />
      <div className="tour-info">
        <h3>{location}</h3>
        <p>{title}</p>
        <span className="rating">{rating}</span>
      </div>
    </div>
  );
};

export default TourCard;
