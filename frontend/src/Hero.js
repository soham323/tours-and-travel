import React from 'react';
import './Hero.css';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Traveling opens the door to creating <span>memories</span></h2>
        <p>Welcome to TravelWORLD, where every journey becomes a remarkable adventure! We’re thrilled to have you explore our world of exceptional travel experiences designed with your desires in mind. At TravelWORLD, we are passionate about curating unique and personalized travel itineraries that cater to your every whim and fancy. Our dedicated team of travel experts and enthusiasts goes above and beyond to ensure that each trip is tailored to provide unforgettable memories and unparalleled satisfaction. From serene getaways and exotic escapes to thrilling explorations and cultural immersions, our goal is to deliver unparalleled quality and exceptional service. We believe that travel is not just about visiting new places, but about creating lifelong memories and discovering the beauty of the world. Thank you for choosing TravelWORLD—we can’t wait to embark on this journey with you and help turn your travel dreams into reality.

</p>
      </div>
      <div className="hero-images">
        <img src={pic1} alt="Place 1" />
        <img src={pic2} alt="Place 2" />
        <img src={pic3} alt="Place 3" />
      </div>
    </section>
  );
};

export default Hero;
