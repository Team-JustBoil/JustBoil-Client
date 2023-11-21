import React, { useState } from 'react';
import './SearchBar2.css';

function SearchBar({ onSearch }) {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  //메뉴 버튼 핸들러
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  

  return (
    <div className="search-container">
      <button onClick={() => window.location.reload()} className="youtube-logo">
      </button>

      <form onSubmit={handleSubmit} className="search-bar">
        <input 
          type="text" 
          placeholder="슥 끓여보고 싶은 음식..." 
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
        </button>
      </form>
      {/* 또 다른 뷰 */}
      <button onClick={toggleMenu} className="menu-button">
      </button>
      <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        <button onClick={toggleMenu} className="menu-open-button"> 적용
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
