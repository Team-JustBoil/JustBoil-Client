import React, { useState, useEffect, useRef,forwardRef } from 'react';
import './VideoItem.css';
import BackItem from './BackItem/BackItem';
import FrontItem from './FrontItem/FrontItem';

function VideoItem({ video }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const frontHeight = frontRef.current ? frontRef.current.offsetHeight : 0;
    const backHeight = backRef.current ? backRef.current.offsetHeight : 0;

    const maxHeight = Math.max(frontHeight, backHeight);

    if (frontRef.current) frontRef.current.style.minHeight = `${maxHeight}px`;
    if (backRef.current) backRef.current.style.minHeight = `${maxHeight}px`;
    }, [video, isFlipped]); // 의존성 배열에 video와 isFlipped 추가

    const handleClick = () => {
      setIsFlipped(!isFlipped);
      console.log("flipped");
    };

  return (
    <div className="video-item-container">
      <div className={`video-item ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
        {isFlipped ? <BackItem video={video} handleClick={handleClick} ref={backRef}/> : <FrontItem video={video} handleClick={handleClick} ref={frontRef} />}
      </div>
    </div>
  );
}

export default VideoItem;
