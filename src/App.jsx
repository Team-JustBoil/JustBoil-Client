import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import RandomFoodSuggestion from './components/RandomFoodSuggestion/RandomFoodSuggestion';
import FoodVideos from './components/FoodVideos/FoodVideos';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {/* 검색했을때는 FoodVideos가 실행, 아니면 RandomFoodSuggestion이 실행되도록 */}
      {searchTerm.length > 0 ? (
        <FoodVideos searchTerm={searchTerm} />
      ) : (
        <RandomFoodSuggestion />
      )}

    </div>
  );
}

export default App;
