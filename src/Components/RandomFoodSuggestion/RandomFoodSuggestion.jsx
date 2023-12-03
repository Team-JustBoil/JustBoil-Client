import React, { useState, useEffect } from 'react';
import './RandomFoodSuggestion.css';
import VideoItem from '../VideoItem/VideoItem';
import SummaryEffect from '../VideoItem/SummaryEffect/SummaryEffect';

function RandomFoodSuggestion({privateNum}) {
  const [randomFood, setRandomFood] = useState('');
  const [randomFoodVideos, setRandomFoodVideos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [localPrivateNum,setLocalPrivateNum]=useState(1);
  // console.log('random',privateNum)
  const loadRandomFood = async () => {
    if (isLoading) return;
    setIsLoading(true);
  
    try {
      const url = 'https://www.just-ai.o-r.kr/recommend';
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data.recommend, data.comment);
      setRandomFood(data.recommend);
      setComment(data.comment);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  // 데이터 로드 함수
  const loadVideos = async () => {
    const response = await fetch('videosUrl');
    if (isLoading) return;
    setIsLoading(true);

    // 서버 통신
    const url = `https://www.just-boil.o-r.kr/search/${privateNum}?keyword=${encodeURIComponent(randomFood)}&index=${startIndex}`;
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
      setRandomFoodVideos(prevVideos => [...prevVideos, ...filteredVideos]);
      setStartIndex(prevIndex => prevIndex + 3);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
    loadVideos(privateNum);
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLocalPrivateNum(privateNum);
        setRandomFoodVideos([]);
        await loadRandomFood();
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, [privateNum]); // privateNum이 변경될 때마다 실행
  
  useEffect(() => {
    if (randomFood !== '') {
      loadVideos();
    }
  },[randomFood])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, privateNum]);

  return (
    <>
      <div className="random-food-suggestion">
        <img src="src/Components/RandomFoodSuggestion/ai-icon.png" alt="캐릭터" className="character-image"/>
        <div className="text-bubble"> <SummaryEffect text={comment}/></div>
      </div>
      <div className="randomfood-videos">
        {randomFoodVideos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
      {isLoading && <div className="loading">영상을 불러오는중 . . .</div>}
    </>
  );
}

export default RandomFoodSuggestion;
