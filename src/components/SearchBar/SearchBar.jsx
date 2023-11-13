import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <button onClick={() => window.location.reload()} className="youtube-logo">
      </button>

      <form onSubmit={handleSubmit} className="search-bar">
        <input 
          type="text" 
          placeholder="슥 끓여보고 싶은 음식..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      <button className="menu-button">
        ☰
      </button>
    </div>
  );
}

export default SearchBar;
