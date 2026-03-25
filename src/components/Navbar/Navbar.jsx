import React, { useState, useEffect } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ weather, setWeather }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Asadbek</span>
          <span className="logo-dot">.</span>
        </div>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>Bosh sahifa</button>
          <button onClick={() => scrollToSection('about')}>Men haqimda</button>
          <button onClick={() => scrollToSection('services')}>Xizmatlar</button>
          <button onClick={() => scrollToSection('portfolio')}>Loyihalar</button>
          <button onClick={() => scrollToSection('contact')}>Bog'lanish</button>
        </div>

        <div className="weather-controls">
          <button
            className={weather === 'sunny' ? 'active' : ''}
            onClick={() => setWeather('sunny')}
            title="Quyoshli"
          >
            <FaSun />
          </button>
          <button
            className={weather === 'cloudy' ? 'active' : ''}
            onClick={() => setWeather('cloudy')}
            title="Bulutli"
          >
            <FaCloud />
          </button>
          <button
            className={weather === 'rainy' ? 'active' : ''}
            onClick={() => setWeather('rainy')}
            title="Yomg'irli"
          >
            <FaCloudRain />
          </button>
          <button
            className={weather === 'snowy' ? 'active' : ''}
            onClick={() => setWeather('snowy')}
            title="Qorli"
          >
            <FaSnowflake />
          </button>
        </div>

        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;