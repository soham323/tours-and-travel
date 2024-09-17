import React from 'react';
import './SearchSection.css';

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="filter">
        <label>Location</label>
        <input type="text" placeholder="Where are you going?" />
      </div>
      <div className="filter">
        <label>Distance</label>
        <input type="text" placeholder="Distance k/m" />
      </div>
      <div className="filter">
        <label>Max People</label>
        <input type="number" placeholder="0" />
      </div>
      <button className="search-button">Search</button>
    </section>
  );
};

export default SearchSection;
