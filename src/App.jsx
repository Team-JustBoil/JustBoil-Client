import React, { useState, useEffect } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import FoodVideos from './Components/FoodVideos/FoodVideos';
import RandomFoodSuggestion from './Components/RandomFoodSuggestion/RandomFoodSuggestion';
import ModalMenu from './Components/ModalMenu/ModalMenu';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [privateNum,usePrivateNum] = useState(1);

  const handlePrivateNum = (newPrivateNum) => {
    setPrivateNum();
    console.log("setPrivateNum");
  }
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    // console.log('handleSearch'); 문제없음
  };
  const handleMenuClick = () => {
    setIsModalOpen(true);
    console.log("modalopen");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("modalclose");
  };

  return (
    <div className="App-back">
      <div className="App">
        <SearchBar onSearch={handleSearch} onMenuClick={handleMenuClick}  />
        <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal} />
        {/* 검색했을때는 FoodVideos가 실행, 아니면 RandomFoodSuggestion이 실행되도록 */}
        {searchTerm.length > 0 ? (
          <FoodVideos searchTerm={searchTerm}/>
        ) : (
          <RandomFoodSuggestion />
        )}
      </div>
    </div>
  );
}

export default App;
