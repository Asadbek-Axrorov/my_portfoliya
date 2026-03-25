import React from 'react';
import { FaReact, FaNode, FaDatabase, FaCode, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React.js', level: 95, icon: <FaReact /> },
    { name: 'Node.js', level: 90, icon: <FaNode /> },
    { name: 'MongoDB', level: 85, icon: <FaDatabase /> },
    { name: 'JavaScript', level: 95, icon: <FaCode /> },
    { name: 'HTML/CSS', level: 98, icon: <FaCode /> },
    { name: 'Express.js', level: 88, icon: <FaNode /> }
  ];

  const achievements = [
    'Full-Stack Web Development mutaxassisi',
    'Google Maps & Yandex Maps integratsiya tajribasi',
    'SEO va Performance Optimization bo\'yicha bilimlar',
    '50+ muvaffaqiyatli loyihalar',
    'Zamonaviy texnologiyalar va best practices'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Men Haqimda</h2>
        <p className="section-subtitle">
          Professional Full-Stack Developer
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Biznesingizni raqamli dunyoga olib chiqamiz! 🚀</h3>
            <p>
              Assalomu alaykum! Men <strong>Asadbek Axrorov</strong> - Full-Stack Web Developer. 
              Biznesingiz uchun murakkab va zamonaviy veb-ilovalar yarataman.
            </p>
            <p>
              Men har bir loyihaga professional yondashuv bilan qarayman va mijozlarimning 
              maqsadlariga erishishlariga yordam beraman. Sifatli kod va biznesingiz uchun 
              aniq lokatsiya – muvaffaqiyat garovi!
            </p>

            <div className="achievements">
              <h4>Yutuqlarim va Malakalarim:</h4>
              <ul>
                {achievements.map((achievement, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-cta">
              <button className="btn btn-primary" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>
                Bog'lanish
              </button>
              <button className="btn btn-outline" onClick={() => {
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
              }}>
                Loyihalarni ko'rish
              </button>
            </div>
          </div>

          <div className="skills-container">
            <h3>Texnologiyalar</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;