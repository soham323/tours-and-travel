// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px 0',
    textAlign: 'center',
    borderTop: '1px solid #e0e0e0',
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const sectionStyle = {
    flex: '1 1 200px',
    margin: '0 15px',
    minWidth: '200px',
    padding: '10px',
    borderRight: '1px solid #e0e0e0'
  };

  const lastSectionStyle = {
    borderRight: 'none'
  };

  const headingStyle = {
    fontSize: '18px',
    marginBottom: '15px',
    fontWeight: 'bold',
    color: '#333'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    marginBottom: '10px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '14px',
    transition: 'color 0.3s'
  };

  const linkHoverStyle = {
    color: '#0056b3'
  };

  const socialMediaStyle = {
    display: 'flex',
    flexDirection: 'column', // Changed to column layout
    alignItems: 'center',
    gap: '10px', // Spacing between social media items
    marginBottom: '20px'
  };

  const socialIconStyle = {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    border: '1px solid #007bff',
    borderRadius: '50%',
    padding: '10px',
    transition: 'background-color 0.3s, color 0.3s'
  };

  const socialIconHoverStyle = {
    backgroundColor: '#007bff',
    color: '#fff'
  };

  const contactStyle = {
    fontSize: '14px',
    color: '#333'
  };

  const footerTextStyle = {
    marginTop: '30px',
    fontSize: '14px',
    color: '#6c757d'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={{ ...sectionStyle, ...lastSectionStyle }}>
          <h4 style={headingStyle}>Follow Us</h4>
          <div style={socialMediaStyle}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={e => e.currentTarget.style = { ...socialIconStyle, ...socialIconHoverStyle }}>facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={e => e.currentTarget.style = { ...socialIconStyle, ...socialIconHoverStyle }}>twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={e => e.currentTarget.style = { ...socialIconStyle, ...socialIconHoverStyle }}>instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} onMouseOver={e => e.currentTarget.style = { ...socialIconStyle, ...socialIconHoverStyle }}>linkedin</a>
          </div>
        </div>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Discover</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="#home" style={linkStyle}>Home</a></li>
            <li style={listItemStyle}><a href="#about" style={linkStyle}>About Us</a></li>
            <li style={listItemStyle}><a href="#services" style={linkStyle}>Services</a></li>
            <li style={listItemStyle}><a href="#gallery" style={linkStyle}>Gallery</a></li>
            <li style={listItemStyle}><a href="#blog" style={linkStyle}>Blog</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="#faq" style={linkStyle}>FAQ</a></li>
            <li style={listItemStyle}><a href="#privacy" style={linkStyle}>Privacy Policy</a></li>
            <li style={listItemStyle}><a href="#terms" style={linkStyle}>Terms & Conditions</a></li>
            <li style={listItemStyle}><a href="#support" style={linkStyle}>Support Area</a></li>
            <li style={listItemStyle}><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Contact</h4>
          <ul style={listStyle}>
            <li style={contactStyle}>Email: <a href="mailto:info@site.com" style={linkStyle}>info@site.com</a></li>
            <li style={contactStyle}>Location: Mumbai, India</li>
            <li style={contactStyle}>Phone: +8801234567890</li>
          </ul>
        </div>
      </div>
      <p style={footerTextStyle}>© 2023 Designed by Mustafa & Soham</p>
    </footer>
  );
};

export default Footer;
