import React from 'react';
import { FaCode, FaMap, FaSearch, FaRocket, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Full-Stack Web Development',
      description: 'Murakkab veb-saytlar va tizimlar yaratish. React, Node.js, MongoDB, Express texnologiyalaridan foydalangan holda zamonaviy va tezkor veb-ilovalar ishlab chiqaman.',
      features: ['Responsive dizayn', 'Admin panel', 'Database integration', 'API development']
    },
    {
      icon: <FaMap />,
      title: 'Xaritalar Integratsiyasi',
      description: 'Biznesingizni Google Maps va Yandex Maps xaritalariga professional joylashtirish. Saytlarni xaritalar bilan integratsiya qilish xizmatlari.',
      features: ['Google Maps', 'Yandex Maps', 'Interactive maps', 'Location services']
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimizatsiya',
      description: 'Saytingizni qidiruv tizimlarida yuqori oʻrinlarga chiqarish. Texnik SEO, kontent optimizatsiya va tezkorlik yaxshilash xizmatlari.',
      features: ['On-page SEO', 'Technical SEO', 'Performance optimization', 'Analytics integration']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Dizayn',
      description: 'Barcha qurilmalarda mukammal ishlaydigan saytlar. Mobil, planshet va desktop uchun moslashtirilgan professional dizayn xizmatlari.',
      features: ['Mobile-first approach', 'Cross-browser compatibility', 'Fast loading', 'Modern UI/UX']
    },
    {
      icon: <FaDatabase />,
      title: 'Backend Development',
      description: 'Kuchli va xavfsiz backend tizimlar yaratish. RESTful API, ma\'lumotlar bazasi dizayni va server konfiguratsiyasi xizmatlari.',
      features: ['RESTful API', 'Database design', 'Authentication', 'Security']
    },
    {
      icon: <FaRocket />,
      title: 'Biznes Avtomatlashtirish',
      description: 'Biznes jarayonlarini avtomatlashtirish va raqamlashtirish. CRM tizimlar, inventarizatsiya va hisobot tizimlari ishlab chiqish.',
      features: ['CRM systems', 'Automation tools', 'Reports & Analytics', 'Integration']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Xizmatlarim</h2>
        <p className="section-subtitle">
          Biznesingiz uchun professional yechimlar
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-dot">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-box">
          <h3>Loyihangiz bormi?</h3>
          <p>Keling, birgalikda ajoyib narsa yaratayk!</p>
          <button className="btn btn-primary" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            Bepul Konsultatsiya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;