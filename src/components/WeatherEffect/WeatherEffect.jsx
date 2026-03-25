import React, { useEffect, useState } from 'react';
import './WeatherEffect.css';

const WeatherEffect = ({ weather }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (weather === 'sunny' || weather === 'cloudy') {
      setParticles([]);
      return;
    }

    const particleCount = weather === 'rainy' ? 100 : 150;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: weather === 'rainy' ? 0.5 + Math.random() * 0.5 : 2 + Math.random() * 2
    }));
    setParticles(newParticles);
  }, [weather]);

  return (
    <div className={`weather-effect ${weather}`}>
      {weather === 'sunny' && (
        <>
          <div className="sun"></div>
          <div className="sun-rays"></div>
        </>
      )}
      
      {weather === 'cloudy' && (
        <>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </>
      )}
      
      {weather === 'rainy' && (
        <div className="rain">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="raindrop"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>
      )}
      
      {weather === 'snowy' && (
        <div className="snow">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="snowflake"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherEffect;