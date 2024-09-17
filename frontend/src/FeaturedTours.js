// src/components/FeaturedTours.js
import React from 'react';
import TourCard from './TourCard';
import './FeaturedTours.css';

// Import images from the images folder
import pic4 from './images/london.png';
import pic5 from './images/bali.png';
import pic6 from './images/bangkok.png';
import pic7 from './images/phuket.png';
import pic8 from './images/paris.png'; // New image
import pic9 from './images/newyork.png'; // New image
import pic10 from './images/tokyo.png'; // New image
import pic11 from './images/sydney.png'; // New image
import pic12 from './images/capetown.png'; // New image
import pic13 from './images/rome.png'; // New image
import pic14 from './images/dubai.png'; // New image
import pic15 from './images/sanfrancisco.png'; // New image


const FeaturedTours = () => {
  return (
    <section className="featured-tours">
      <h2>Our Featured Tours</h2>
      <div className="tour-list">
        <TourCard image={pic4} title="Westminster Bridge" location="London" rating="4.5" />
        <TourCard image={pic5} title="Bali, Indonesia" location="Bali" rating="5.0" />
        <TourCard image={pic6} title="Snowy Mountains, Thailand" location="Bangkok" rating="Not rated" />
        <TourCard image={pic7} title="Beautiful Sunrise, Thailand" location="Phuket" rating="5.0" />
        {/* Additional TourCards */}
        <TourCard image={pic8} title="Eiffel Tower" location="Paris" rating="4.8" />
        <TourCard image={pic9} title="Central Park" location="New York" rating="4.7" />
        <TourCard image={pic10} title="Shibuya Crossing" location="Tokyo" rating="4.9" />
        <TourCard image={pic11} title="Sydney Opera House" location="Sydney" rating="4.6" />
        <TourCard image={pic12} title="Table Mountain" location="Cape Town" rating="4.8" />
        <TourCard image={pic13} title="Colosseum" location="Rome" rating="4.7" />
        <TourCard image={pic14} title="Burj Khalifa" location="Dubai" rating="5.0" />
        <TourCard image={pic15} title="Golden Gate Bridge" location="San Francisco" rating="4.6" />
        
      </div>
    </section>
  );
};

export default FeaturedTours;
