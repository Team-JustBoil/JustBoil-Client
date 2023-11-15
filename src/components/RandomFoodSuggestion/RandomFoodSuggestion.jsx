import React, { useState, useEffect } from 'react';
import './RandomFoodSuggestion.css';
import VideoItem from '../VideoItem/VideoItem';

function RandomFoodSuggestion() {
  const foodOptions = ['김치찌개', '볶음밥', '피자', '파스타', '스테이크']; // 예시 음식 리스트
  const [randomFood, setRandomFood] = useState('');
  const [randomFoodVideos,setRandomFoodVideos] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * foodOptions.length);
    setRandomFood(foodOptions[randomIndex]);

    const dummy = {
      recipeList: [
        {
          id: 2834, 
          title: '연애 검열 (SUB)', 
          thumbnail: 'https://i.ytimg.com/an_webp/y9djoCtUQLA/mqdefault_6s.webp?du=3000&sqp=CLDyxqoG&rs=AOn4CLDHu2u9TPjnC2lONos62uF7kpQQHg',
          youtubeId: 'y9djoCtUQLA',
          viewCount: 8085492
        },
        {
          id: 23213,
          title: '친구 애인은 친척 (SUB)',
          thumbnail: 'https://i.ytimg.com/an_webp/QRqbfpqqb4w/mqdefault_6s.webp?du=3000&sqp=CPSkx6oG&rs=AOn4CLDZ20Xj5VIjnYQtAnJwJUjqXTXnyg',
          youtubeId: 'QRqbfpqqb4w',
          viewCount: 323233
        },
        {
          id: 23232,
          title: '이별 여행 특 (SUB)',
          thumbnail: 'https://i.ytimg.com/an_webp/mVK1ihiJ7Ms/mqdefault_6s.webp?du=3000&sqp=CPT7xqoG&rs=AOn4CLCLvB6ePuljifBG36PgKD3YY5wJCQ',
          youtubeId: 'mVK1ihiJ7Ms',
          viewCount: 3212312313
        }
      ],
      foodName: "떡볶이"
    }
    setRandomFoodVideos(dummy.recipeList);
  }, []);

  return (
    <>
      <div className="random-food-suggestion">
        오늘은 {randomFood} 어때??
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
