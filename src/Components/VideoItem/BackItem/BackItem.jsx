import React, { useState, useEffect, useRef, forwardRef } from 'react';
import SummaryEffect from '../SummaryEffect/SummaryEffect';
import './BackItem.css';

const BackItem = forwardRef(({ video, handleClick, fetchSummary }, ref) => {
  const [summary, setSummary] = useState(video.summary);

  const fetchVideoSummary = async (video) => {
    if (video.summary === null) {
      try {
        const response = await fetch(`https://www.just-ai.o-r.kr/summary/${video.youtube_id}`);
        const data = await response.json();

        setSummary(data.summary);
      } catch (error) {
        console.error('Error fetching summary:', error);
        setSummary('요약 정보를 불러오는 데 실패했습니다.');
      }
    }
  };
  

  useEffect(() => {
    fetchVideoSummary(video);
  }, [video, fetchSummary]);

  return (
    <>
      <div className="back" ref={ref}>
        <div className="overlay-container">
          <h3 onClick={handleClick}>{video.title}
            <div style={{ color: "gray", fontSize: "0.8em",textAlign:"center" , paddingTop:"10px"}}> 
              🍽 요약 정보 🍽
            </div>
          </h3>
          <hr />
        </div>
        {/* 비디오 요약 */}
        <div className="summary-container-background">
          <div className="summary-container">
            {summary ? <SummaryEffect text={summary} /> : '요약 정보를 불러오는 중...'}
          </div>
        </div>
      </div>
    </>
  );
});

export default BackItem;
