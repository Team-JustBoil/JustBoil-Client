import React, { useState, useEffect } from 'react';

function SummaryEffect({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        index++; // 먼저 index를 증가시킵니다.
        setDisplayedText((oldText) => oldText + text[index - 1]); // 증가된 index에 해당하는 문자를 추가합니다.
      } else {
        clearInterval(timer);
      }
    }, 100); // 100ms 간격으로 한 글자씩 추가
  
    return () => clearInterval(timer); // 컴포넌트 언마운트시 타이머 정리
  }, [text]);
  
  

  return <div className="typing-effect">{displayedText}</div>;
}

export default SummaryEffect;
