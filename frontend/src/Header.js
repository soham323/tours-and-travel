import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">TravelWORLD</div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/tour" className="nav-link">Tour</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <Link to="/register">
            <button className="register">Register</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
