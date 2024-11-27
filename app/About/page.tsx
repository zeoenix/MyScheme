"use client";

import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    { text: "Capstone Project", level: "h1" },
    { text: "Indian Institute of Technology, Patna", level: "h2" },
    { text: "Made by Omjoy Datta", level: "h3" },
  ];

  useEffect(() => {
    if (currentTitle < titles.length) {
      const timer = setTimeout(() => {
        setCurrentTitle(prev => prev + 1);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentTitle, titles.length]);

  return (
    <div className="container">
      <div className="rgb-background">
        <div className="rgb-grad"></div>
      </div>
      <div className="text-container">
        {currentTitle < titles.length ? (
          React.createElement(titles[currentTitle].level, { className: "title" }, titles[currentTitle].text)
        ) : (
          <div className="final-text">
            <h1 className="main-title">Capstone Project</h1>
            <h2 className="institution-title">Indian Institute of Technology, Patna</h2>
            <h3 className="floating-text">Made by Omjoy Datta</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;