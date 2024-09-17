import React from 'react';
import './About.css';
import mustafa from '../images/mustafa.png';
import soham from '../images/soham.png';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Welcome to TravelWORLD, where every journey becomes a remarkable adventure! We’re thrilled to have you explore our world of exceptional travel experiences designed with your desires in mind. At TravelWORLD, we are passionate about curating unique and personalized travel itineraries that cater to your every whim and fancy. Our dedicated team of travel experts and enthusiasts goes above and beyond to ensure that each trip is tailored to provide unforgettable memories and unparalleled satisfaction. From serene getaways and exotic escapes to thrilling explorations and cultural immersions, our goal is to deliver unparalleled quality and exceptional service. We believe that travel is not just about visiting new places, but about creating lifelong memories and discovering the beauty of the world. Thank you for choosing TravelWORLD—we can’t wait to embark on this journey with you and help turn your travel dreams into reality.</p>
      </header>

      <hr />

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to inspire and assist you in discovering the most enchanting destinations and creating memorable journeys that will stay with you for a lifetime. At TravelWORLD, we understand that every traveler is unique, and we’re committed to providing personalized service that caters to your individual preferences and needs. Whether you’re looking for a relaxing beach vacation, an adventurous mountain trek, or a cultural city exploration, we are here to guide you every step of the way. Our team of passionate travel experts is dedicated to ensuring that your travel experiences are nothing short of spectacular. Thank you for being part of the TravelWORLD family—we look forward to helping you explore the wonders of the world and making your travel dreams come true.</p>
      </section>

      <hr />

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={soham} alt="Team Member 1" />
            <h3>Soham Khare</h3>
            <p>CEO & Founder</p>
            <p>Soham played a crucial role in both the backend and frontend development of the website. His expertise ensured seamless functionality and a polished user experience.</p>
          </div>
          <div className="team-member">
            <img src={mustafa} alt="Team Member 2" />
            <h3>Mohammed Mustafa</h3>
            <p>CEO & Founder</p>
            <p>Mustafa made significant contributions to the backend and frontend aspects of the website. His dedication was key in delivering a robust and engaging platform.</p>
          </div>
        </div>
      </section>

      <hr />

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <blockquote>
            "TravelWORLD made our vacation truly special. The attention to detail and personalized service exceeded our expectations!"
          </blockquote>
          <p>- Hussain Mantri</p>
        </div>
        <div className="testimonial">
          <blockquote>
            "An amazing experience from start to finish. The TravelWORLD team took care of everything, and our trip was perfect!"
          </blockquote>
          <p>- Melanie Fernandez</p>
        </div>
      </section>

      <hr />

      <section className="contact-info">
        <h2>Get In Touch</h2>
        <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:info@travelworld.com">info@travelworld.com</a> or call us at <a href="tel:+123456789">+1 (234) 567-89</a>.</p>
      </section>
    </div>
  );
};

export default About;
