import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import FeaturedTours from './FeaturedTours';
import SubscribeBanner from './SubscribeBanner';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'; // Main stylesheet for global styles

function App() {
  return (
    <Router> {/* Wrap the entire application with Router */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Define routes for the different pages */}
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <FeaturedTours />
                <SubscribeBanner />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<FeaturedTours />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
