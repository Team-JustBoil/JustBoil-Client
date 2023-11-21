import React from 'react';
import './VideoItem.css';

function VideoItem({ video }) {
  return (
    <div className="video-item">
      <img src={video.thumbnail} alt={`${video.title}`} />
      <h3>{video.title}</h3>
      <p>조회수 : {video.view_count}</p>
      <a href={`https://www.youtube.com/watch?v=${video.youtube_id}`} target="_blank" rel="noopener noreferrer">
        유투브로 보기
      </a>
      
    </div>
  );
}

export default VideoItem;
