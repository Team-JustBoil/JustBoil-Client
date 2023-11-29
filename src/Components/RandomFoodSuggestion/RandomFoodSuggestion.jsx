import React, { useState, useEffect } from 'react';
import './RandomFoodSuggestion.css';
import VideoItem from '../VideoItem/VideoItem';

function RandomFoodSuggestion() {
  const [randomFood,setRandomFood] = useState('');
  const [randomFoodVideos,setRandomFoodVideos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

   // 초기 랜덤 데이터 로드 함수
   const loadRandomVideos = () => {
    if (isLoading) return;
    setIsLoading(true);

    // 랜덤 음식 추천 
    const url = `https://www.just-boil.o-r.kr/random/1`;
    fetch(url, {
      method: 'GET', // GET 방식으로 변경
    })
    .then(response => response.json())
    .then(data => {
      // json 처리
      console.log(data.data.food_name);
      // 데이터 처리
      // null이 아닌 요소만 필터링
      const filteredVideos = data.data.recipe_response_list.filter(video => video !== null);
      setRandomFood(data.data.food_name);
      setRandomFoodVideos(prevVideos => [...prevVideos, ...filteredVideos]);
      setStartIndex(prevIndex => prevIndex + 3);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  };

  // 랜덤 추천된 음식 데이터 더 추출하기
  const loadVideos = () => {
    if (isLoading) return;
    setIsLoading(true);

    // 서버 통신
    const url = `https://www.just-boil.o-r.kr/search/1?keyword=${encodeURIComponent(randomFood)}&index=${startIndex}`;
    fetch(url, {
      method: 'GET', // GET 방식으로 변경
    })
    .then(response => response.json())
    .then(data => {
      // json 처리
      console.log(data);
      // 데이터 처리
      const filteredVideos = data.data.recipe_response_list.filter(video => video !== null);
      setRandomFoodVideos(prevVideos => [...prevVideos, ...filteredVideos]);
      setStartIndex(prevIndex => prevIndex + 3);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  };

  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
    console.log('handleScroll');
    loadVideos();
  };

  useEffect(() => {
    console.log(2222);
    loadRandomVideos();
  }, []);

  // 스크롤 이벤트 리스너 등록 및 해제
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <>
      <div className="random-food-suggestion">
        <img src="src/Components/RandomFoodSuggestion/ai-icon.png" alt="캐릭터" className="character-image"/>
        <div className="text-bubble">오늘은 {randomFood} 어때??</div>
      </div>
      <div className="randomfood-videos">
        {randomFoodVideos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </>

  );
}

export default RandomFoodSuggestion;
