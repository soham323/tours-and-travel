import React, { useState } from 'react';
import './SubscribeBanner.css'; // Import CSS for styling

const SubscribeBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false); // New state to track subscription status

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubscribed(true); // Set subscription status to true
    setEmail(''); // Clear the email input field
    // Add any additional logic here, such as sending the email to a backend service.
  };

  return (
    <div className="subscribe-banner">
      <div className="banner-content">
        <h2>Subscribe now to get useful traveling information.</h2>
        {isSubscribed ? (
          <p>Email subscribed</p> // Display this message if the user is subscribed
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required // Ensure the email field is required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
        {/* Illustration of person or background image can be added here */}
      </div>
    </div>
  );
};

export default SubscribeBanner;
