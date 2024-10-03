// src/components/TourCard.js
import React from 'react';
import './TourCard.css';

const TourCard = ({ image, name, description, countries, cities, days, nights, price }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className='tour-card-image' />
      <div className="tour-info">
        <h3>{name}</h3>
        <p className='tour-description'>{description}</p>
        <div className="tour-info">
          <p><strong>Countries: {countries.join(', ')}</strong></p>
          <p><strong>Cities: {cities}</strong></p> 
          <p><strong>Duration: {days} Days & {nights} Nights.</strong></p> 
          <p><strong>Price: ₹{price}</strong></p> 
        </div>
      </div>
    </div>
  );
};

export default TourCard;
