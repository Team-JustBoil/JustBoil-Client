import React, { useState, useEffect, useRef,forwardRef } from 'react';
import './FrontItem.css';
const FrontItem = forwardRef(({ video, handleClick }, ref) => {
    return (
      <div className="front" ref={ref}>
        <img src={video.thumbnail} alt={`${video.title}`} onClick={handleClick}/>
        <h3 onClick={handleClick}>{video.title}</h3>
        <p onClick={handleClick}>조회수 : {video.view_count} </p>
        <hr></hr>

          <a className="video-item-logo" href={`https://www.youtube.com/watch?v=${video.youtube_id}`} target="_blank" rel="noopener noreferrer"></a>

      </div>
    );
  });
  export default FrontItem;