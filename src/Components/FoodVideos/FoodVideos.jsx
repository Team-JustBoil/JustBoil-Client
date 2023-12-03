import React, { useState, useEffect } from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './FoodVideos.css';
import SummaryEffect from '../VideoItem/SummaryEffect/SummaryEffect';

function FoodVideos({ searchTerm,privateNum}) {
  const [videos, setVideos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  console.log('search', privateNum, searchTerm)
  
  // 데이터 로드 함수
  const loadVideos = () => {
    if (isLoading) return;
    setIsLoading(true);

    // 서버 통신
    const url = `https://www.just-boil.o-r.kr/search/${privateNum}?keyword=${encodeURIComponent(searchTerm)}&index=${startIndex}`;
    fetch(url, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      // json 처리
      console.log(data);
      // 데이터 처리
      // null이 아닌 요소만 필터링
      const filteredVideos = data.data.recipe_response_list.filter(video => video !== null);
      setVideos(prevVideos => [...prevVideos, ...filteredVideos]);
      setStartIndex(prevIndex => prevIndex + 3);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  };

  // summary 업데이트 함수
  const updateVideoSummary = (videoId, newSummary) => {
    setVideos(videos => videos.map(video => {
      if (video.id === videoId) {
        return { ...video, summary: newSummary };
      }
      return video;
    }));
  };


  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
    loadVideos();
  };

  // 컴포넌트 마운트 및 searchTerm 변경 시
  useEffect(() => {
    console.log('FoodVideos - privateNum:', privateNum);
    setVideos([]);
    setStartIndex(0);
    loadVideos(privateNum);
  }, [searchTerm, privateNum]);

  // 스크롤 이벤트 리스너 등록 및 해제
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <>
      <div className="search-food">
        <img src="src/Components/RandomFoodSuggestion/ai-icon.png" alt="캐릭터" className="character-image"/>
        <div className="text-bubble"><SummaryEffect text={`너가 원하던 ${searchTerm} 레시피야`}/></div>
      </div>
      <div className="food-videos">
        {videos.map(video => (
          <VideoItem key={video.id} video={video} updateVideoSummary={updateVideoSummary}/>
        ))}
      </div>
      {isLoading && <div className="loading">영상을 불러오는중 . . .</div>}
    </>
  );
}

export default FoodVideos;
