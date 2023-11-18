import React, { useState, useEffect } from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './FoodVideos.css';

function FoodVideos({ searchTerm }) {
  const [videos, setVideos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // 데이터 로드 함수
  const loadVideos = () => {
    if (isLoading) return;

    setIsLoading(true);
    fetch('https://www.just-boil.o-r.kr:8080', {
      method: 'POST', //POST API 사용
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type_number: 1,
        food_name: searchTerm,
        start_index: startIndex
      }),
    })
    .then(response => response.json())
    .then(data => {
      // json 췤
      console.log(data); 
      // 데이터 처리
      setVideos(prevVideos => [...prevVideos, ...data.data.recipe_response_list]);
      setStartIndex(prevIndex => prevIndex + 3);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    loadVideos();
  };

  // 컴포넌트 마운트 시 스크롤 이벤트 리스너 추가 및 데이터 로드
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    loadVideos();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="search-food">
        짜잔 원하던 {searchTerm} 레시피를 준비했어!
      </div>
      <div className="food-videos">
        {videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </>
  );
}

export default FoodVideos;
