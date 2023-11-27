import React, { useState } from 'react';
import '../VideoItem/VideoItem.css';


function VideoItemFront({ video, handleClick }) {
  return (
  <div className="front">
    <img src={video.thumbnail} alt={`${video.title}`} onClick={handleClick}/>
    <h3 onClick={handleClick} >{video.title}</h3>
    <p onClick={handleClick} >조회수 : {video.view_count} </p>
    <a className="video-item-logo" href={`https://www.youtube.com/watch?v=${video.youtube_id}`} target="_blank" rel="noopener noreferrer"></a>
  </div>
  )
}

function VideoItemBack({ handleClick }) {
  return (
  <div className="back">
    <div onClick={handleClick}>영상 요약</div>
  </div>
  )
}

function VideoItem({ video }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    console.log("flipped");
  };

  return (
    <div className="video-item-container">
      <div className={`video-item ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
        {isFlipped ? <VideoItemBack handleClick={handleClick} /> : <VideoItemFront video={video} handleClick={handleClick} />}
      </div>
    </div>
  );
}

export default VideoItem;
