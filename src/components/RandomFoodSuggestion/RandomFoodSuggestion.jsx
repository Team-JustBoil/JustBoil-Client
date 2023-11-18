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
          title: '[ᴘʟᴀʏʟɪsᴛ] 90년대생의 그시절 크리스마스 K-캐롤 ☃️🎅🎄)', 
          thumbnail: 'https://i.ytimg.com/vi/v3LRwxfAiNU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWoT8I3t_oGbC8KGp9EXZyHr_1QA',
          youtubeId: 'v3LRwxfAiNU',
          viewCount: 8085492
        },
        {
          id: 23213,
          title: '산타도 대놓고 듣는다는 그 팝송',
          thumbnail: 'https://i.ytimg.com/vi/8MhtzapYzGo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhyIEkoLDAP&rs=AOn4CLCGqajAUTiyE3KcF3ilP26lzrqJtw',
          youtubeId: '8MhtzapYzGo',
          viewCount: 323233
        },
        {
          id: 23232,
          title: '이별 여행 특 (SUB)',
          thumbnail: 'https://i.ytimg.com/an_webp/mVK1ihiJ7Ms/mqdefault_6s.webp?du=3000&sqp=CPT7xqoG&rs=AOn4CLCLvB6ePuljifBG36PgKD3YY5wJCQ',
          youtubeId: '8MhtzapYzGo',
          viewCount: 3212312313
        }
      ],
      foodName: "떡볶이"
    }
    setRandomFoodVideos(dummy.recipeList);
  }, []);

  //서버와 통신 
  // useEffect(() => {
  //   // 서버에 데이터 요청하는 함수
  //   const fetchData = async () => {
  //     try {
  //       // 서버로부터 데이터를 받아오는 부분
  //       // 여기서 'your-server-endpoint'는 실제 서버의 URL로 바꿔야 합니다.
  //       const response = await fetch(`your-server-endpoint?searchTerm=${randomFood}`);
  //       if (!response.ok) {
  //         throw new Error('서버 응답이 올바르지 않습니다.');
  //       }
  //       const data = await response.json();

  //       // 받아온 데이터를 videos 상태에 저장
  //       setVideos(data.recipeList);
  //     } catch (error) {
  //       console.error('데이터를 불러오는데 실패했습니다:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
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
