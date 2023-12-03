import React, { useState, useEffect } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import FoodVideos from './Components/FoodVideos/FoodVideos';
import RandomFoodSuggestion from './Components/RandomFoodSuggestion/RandomFoodSuggestion';
import ModalMenu from './Components/ModalMenu/ModalMenu';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [privateNum,setPrivateNum] = useState();
  const handlePrivateNum = (newPrivateNum) => {
    const num = parseInt(newPrivateNum,10);
    setPrivateNum(num); ////문제 없을 무
  }
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    console.log('handleSearch',newSearchTerm);
  };
  const handleMenuClick = () => {
    setIsModalOpen(true);
    // console.log("modalopen"); 문제없음
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // console.log("modalclose"); 문제 없음
  };
  useEffect(() => {
    console.log("setPrivateNum = ", privateNum);
    if (privateNum === undefined || privateNum === null) {
      setPrivateNum(1);
    }
  }, [privateNum]); //문제 없을 무
  console.log("App = ", privateNum);
  console.log('FoodVideos props:', { searchTerm, privateNum });
  console.log('RandomFoodSuggestion props:', { privateNum });
  return (
    <div className="App-back">
      <div className="App">
        <SearchBar onSearch={handleSearch} onMenuClick={handleMenuClick}  />
        <ModalMenu 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}  
          onPrivateNumChange={handlePrivateNum}
          privateNum={privateNum || 1} 
          />
        {/* 검색했을때는 FoodVideos가 실행, 아니면 RandomFoodSuggestion이 실행되도록 */}
        {searchTerm.length > 0 ? (
          <FoodVideos searchTerm={searchTerm} privateNum={parseInt(privateNum, 10)} />
        ) : (
          <RandomFoodSuggestion privateNum={parseInt(privateNum, 10)} />
        )}
      </div>
    </div>
  );
}

export default App;