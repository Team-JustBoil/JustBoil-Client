import React, { useState, useEffect, useRef, forwardRef } from 'react';
import SummaryEffect from '../SummaryEffect/SummaryEffect';

const BackItem = forwardRef(({ video, handleClick, fetchSummary }, ref) => {
    const [summary, setSummary] = useState(video.summary);

    useEffect(() => {
        if (video.summary === null) {
            fetchSummary(`https://www.youtube.com/watch?v=${video.youtube_id}`)
                .then(data => {
                    setSummary(data);
                })
                .catch(error => {
                    console.error('Error fetching summary:', error);
                });
        }
    }, [video, fetchSummary]);

    return (
      <div className="back" ref={ref}>
        <h3 onClick={handleClick}>{video.title}</h3>
        {/* 비디오 요약 */}
        <SummaryEffect text={summary || '요약 정보를 불러오는 중...'} />
      </div>
    );
});

export default BackItem;
