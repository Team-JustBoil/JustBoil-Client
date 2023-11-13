import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import RandomFoodSuggestion from './components/RandomFoodSuggestion/RandomFoodSuggestion';
import FoodVideos from './components/FoodVideos/FoodVideos';

function App() {
  const handleSearch = (searchTerm) => {
    console.log(searchTerm); // 추후 검색 로직으로 대체
  };

  const [videos, setVideos] = useState([]);
  
  // video 배열에 추가하는 useEffect 이고 
  useEffect(() => {
    const dummy = [
      {
        id: 'y9djoCtUQLA', 
        title: '연애 검열 (SUB)', 
        thumbnail: 'https://i.ytimg.com/an_webp/y9djoCtUQLA/mqdefault_6s.webp?du=3000&sqp=CLDyxqoG&rs=AOn4CLDHu2u9TPjnC2lONos62uF7kpQQHg'
      },
      {
        id:'QRqbfpqqb4w',
        title:'친구 애인은 친척 (SUB)',
        thumnail:'https://i.ytimg.com/an_webp/QRqbfpqqb4w/mqdefault_6s.webp?du=3000&sqp=CPSkx6oG&rs=AOn4CLDZ20Xj5VIjnYQtAnJwJUjqXTXnyg'
      },
      {
        id:'mVK1ihiJ7Ms',
        title:'이별 여행 특 (SUB)',
        thumnail:'https://i.ytimg.com/an_webp/mVK1ihiJ7Ms/mqdefault_6s.webp?du=3000&sqp=CPT7xqoG&rs=AOn4CLCLvB6ePuljifBG36PgKD3YY5wJCQ'
      }
    ];

    setVideos(dummy);
  },[]);

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <RandomFoodSuggestion />
      <FoodVideos videos={videos} />
      {/* 다른 컴포넌트들 */}
    </div>
  );
}

export default App;
