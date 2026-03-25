import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'La Maision Restaurant',
      category: 'restaurant',
      description: 'Premium restoran veb-sayti. Elegant dizayn, menyu va band qilish tizimi bilan.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      link: 'https://la-maision-restaurant.netlify.app/',
      tech: ['React', 'CSS3', 'JavaScript']
    },
    {
      id: 2,
      title: 'FastFood Burger',
      category: 'restaurant',
      description: 'Fast-food restoran veb-sayti. Tez buyurtma berish va online to\'lov tizimi.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
      link: 'https://fastfodburger.netlify.app/',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Tech Bozor',
      category: 'ecommerce',
      description: 'Elektron tijorat platformasi. Mahsulotlar katalogi va savat tizimi.',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
      link: 'https://tech-bozor.netlify.app/',
      tech: ['React', 'Express', 'API']
    },
    {
      id: 4,
      title: 'Skimat Markaz',
      category: 'education',
      description: 'Ta\'lim markazi veb-sayti. Kurslar, ro\'yxatdan o\'tish va login tizimi.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      link: 'https://skimat-markaz.netlify.app/login.html',
      tech: ['HTML5', 'CSS3', 'JavaScript']
    }
  ];

  const categories = [
    { id: 'all', name: 'Hammasi' },
    { id: 'restaurant', name: 'Restoran' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'education', name: 'Ta\'lim' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Mening Loyihalarim</h2>
        <p className="section-subtitle">
          Bajarilgan ishlarim va loyihalarim
        </p>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <FaExternalLinkAlt /> Ko'rish
                  </a>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h3>Ko'proq loyihalar kerakmi?</h3>
          <p>Sizning g'oyangizni amalga oshirishga tayyorman!</p>
          <button className="btn btn-primary" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            Loyiha boshlash
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;