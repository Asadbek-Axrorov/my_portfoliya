import React from 'react';
import { FaGithub, FaTelegram, FaInstagram, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">👋</span>
            <span>Assalomu alaykum, men</span>
          </div>
          
          <h1 className="hero-title">
            <span className="name-highlight">Asadbek Axrorov</span>
            <br />
            Full-Stack Web Developer
          </h1>
          
          <p className="hero-description">
            Biznesingizni raqamli dunyoga olib chiqaman! 🚀 
            Professional veb-saytlar, tizimlar va xaritalar bilan integratsiya xizmatlari.
            Zamonaviy texnologiyalar va sifatli kod yordamida biznesingizni rivojlantiraman.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Loyihalar</p>
            </div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Mijozlar</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Sifat</p>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Bog'lanish
            </button>
            <a href="#portfolio" className="btn btn-outline">
              Loyihalarni ko'rish
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Asadbek-Axrorov" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://t.me/asad_coder" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://www.instagram.com/asadbek_asrorvich?igsh=dXAwNHZxOG45MHhj" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-backdrop"></div>
          <div className="floating-elements">
            <div className="floating-item item-1">React</div>
            <div className="floating-item item-2">Node.js</div>
            <div className="floating-item item-3">MongoDB</div>
            <div className="floating-item item-4">Express</div>
            <div className="floating-item item-5">JavaScript</div>
            <div className="floating-item item-6">CSS3</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;