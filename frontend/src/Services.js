// src/components/Services.js
import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [temperature, setTemperature] = useState('');

  const places = {
    London: '15°C',
    Bali: '28°C',
    Bangkok: '32°C',
    Phuket: '30°C',
    Paris: '18°C',
    NewYork: '20°C',
    Tokyo: '25°C',
    Sydney: '22°C',
    CapeTown: '19°C',
    Rome: '17°C',
    Dubai: '38°C',
    SanFrancisco: '16°C',
  };

  const handlePlaceChange = (event) => {
    const place = event.target.value;
    setSelectedPlace(place);
    setTemperature(places[place]);
  };

  return (
    <section className="services">
      <h2>We offer our best services</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Calculate Weather</h3>
          <p>Select a destination to know the current weather:</p>
          <select value={selectedPlace} onChange={handlePlaceChange}>
            <option value="">Select a place</option>
            {Object.keys(places).map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
          {temperature && (
            <p>
              The current temperature in {selectedPlace} is {temperature}.
            </p>
          )}
        </div>

        <div className="service-card">
          <h3>Best Tour Guide</h3>
          <p>
            Our expert tour guides are locals with in-depth knowledge of the most hidden gems, top-rated attractions, and historical insights. They ensure every tour is informative, fun, and tailored to your interests.
          </p>
        </div>

        <div className="service-card">
          <h3>Customization</h3>
          <p>
            Tailor your travel experience with our flexible customization options. Choose your destinations, activities, accommodations, and more. Whether it's an adventure-filled trip or a relaxing getaway, we’ll make it exactly as you envision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
