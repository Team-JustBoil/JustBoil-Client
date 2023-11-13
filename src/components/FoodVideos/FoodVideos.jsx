import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './FoodVideos.css';

function FoodVideos({ videos }) {
  return (
    <div className="food-videos">
      {videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
}

export default FoodVideos;
