// SearchBar.js
import React, { useState } from 'react';
import './SearchBar2.css';

function SearchBar({ onSearch, onMenuClick }) {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  return (
    <div className="search-container">
      <button onClick={() => window.location.reload()} className="youtube-logo"></button>

      <form onSubmit={handleSubmit} className="search-bar">
        <input 
          type="text" 
          placeholder="슥 끓여보고 싶은 음식..." 
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button"></button>
      </form>

      <button onClick={onMenuClick} className="menu-button"></button>
    </div>
  );
}

export default SearchBar;
