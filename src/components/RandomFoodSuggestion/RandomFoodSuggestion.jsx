import React, { useState, useEffect } from 'react';
import './RandomFoodSuggestion.css';

function RandomFoodSuggestion() {
  const foodOptions = ['김치찌개', '볶음밥', '피자', '파스타', '스테이크']; // 예시 음식 리스트
  const [randomFood, setRandomFood] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * foodOptions.length);
    setRandomFood(foodOptions[randomIndex]);
  }, []);

  return (
    <div className="random-food-suggestion">
      오늘은 {randomFood} 어때요??
    </div>
  );
}

export default RandomFoodSuggestion;
