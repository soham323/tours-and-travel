// src/components/FeaturedTours.js
import React, { useEffect } from 'react';
import TourCard from './TourCard';
import { useState } from 'react';
import axios from 'axios';
import './FeaturedTours.css';

const FeaturedTours = () => {
  const [tours, setTours] = useState([]);
  
  //implementing the useEffect feature to display tours in a loop and make it auto break.
  useEffect(() => {
    // function to fetch tours from api
    const fetchTours = async () => {
      try{
        const response = await axios.get('http://localhost:8000/api/tours/getTours');
        setTours(response.data.tours);
      }
      catch(error){
        console.error("Error fetching tours ",error);
      }
    };
    fetchTours();
  },[]);
  return (
    <section className="featured-tours">
      <h2>Our Featured Tours</h2>
      <div className="tour-list">
        {tours.map((tour, index) => (
        <TourCard 
            key={index}
            image={tour.tourImage}       // Tour Image
            name={tour.name}             // Tour Name
            description={tour.description} // Tour Description
            countries={tour.countries}   // Countries
            cities={tour.cities}         // Cities
            days={tour.days}             // Duration (Days)
            nights={tour.nights}         // Duration (Nights)
            price={tour.price}    
        />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
