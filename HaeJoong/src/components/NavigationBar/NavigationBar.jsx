// NavigationBar.jsx

import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="nav-item">레시피</div>
      <div className="nav-item">먹방</div>
      <div className="nav-item">
        <span>시청</span>
        <span>내역</span>
      </div>
      <div className="nav-item">MY</div>
    </div>
  );
};

export default NavigationBar;
