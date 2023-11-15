import React from 'react';
import './VideoItem.css';

function VideoItem({ video }) {
  return (
    <div className="video-item">
      <img src={video.thumbnail} alt={`${video.title}`} />
      <h3>{video.title}</h3>
      <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
        링크로 이동
      </a>
      <p>Views: {video.viewCount}</p>
      <p>YouTube ID: {video.id}</p>
    </div>
  );
}

export default VideoItem;
