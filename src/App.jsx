import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import WeatherEffect from './components/WeatherEffect/WeatherEffect';
import './App.css';

function App() {
  const [weather, setWeather] = useState('sunny');

  return (
    <Router>
      <div className="App">
        <WeatherEffect weather={weather} />
        <Navbar weather={weather} setWeather={setWeather} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;