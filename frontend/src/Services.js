import React, { useState } from 'react';
import './Services.css';
import axios from 'axios';

const Services = () => {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // OpenWeather API key (ensure you have your key here)
  const API_KEY = '555bb10fd3d3daed71c1ea46770b01aa';

  // Function to fetch weather data based on the selected place
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = response.data;

      setWeatherData({
        name: data.name,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        feelsLike: data.main.feels_like,
      });
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Event handler when the user selects a new place
  const handlePlaceChange = (event) => {
    const place = event.target.value;
    setSelectedPlace(place);

    if (place) {
      fetchWeatherData(place);
    }
  };

  return (
    <section className="services">
      <h2>We offer our best services</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Real-Time Weather Search</h3>
          <p>Select a destination to know the current weather:</p>
          <select value={selectedPlace} onChange={handlePlaceChange}>
            <option value="">Select a place</option>
            <option value="London">London</option>
            <option value="Bali">Bali</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Phuket">Phuket</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
            <option value="Rome">Rome</option>
            <option value="Dubai">Dubai</option>
            <option value="San Francisco">San Francisco</option>
          </select>

          {/* Display loading message or error if any */}
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}

          {/* Display the real-time weather data  */}
          {weatherData && !loading && (
            <div className="weather-details">
              <h4>Weather in {weatherData.name}</h4>
              <p>Temperature: {weatherData.temperature}°C, Feels Like: {weatherData.feelsLike}°C</p>
              <p>Humidity: {weatherData.humidity}%,  Wind Speed: {weatherData.windSpeed} km/h</p>
            </div>
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
