import React ,{useState,useEffect} from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './FoodVideos.css';

function FoodVideos() {
  const [videos, setVideos] = useState([]);
  const [searchFood,setSearchFood] = useState('');
  
  // video 배열에 추가하는 useEffect 이고 
  useEffect(() => {
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
  
    setVideos(dummy.recipeList);
    setSearchFood(dummy.foodName);
  }, []);

  return (
    <>
      <div className="search-food">
        짜잔 원하던 {searchFood} 레시피를 준비했어!
      </div>
      <div className="food-videos">
        {videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default FoodVideos;
