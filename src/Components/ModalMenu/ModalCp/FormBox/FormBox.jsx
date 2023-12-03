import React, { useState } from 'react';
import './FormBox.css';

const FormBox = ({ question, buttonCount, buttonTexts, onChange, initialValue }) => {
  const [selectedButton, setSelectedButton] = useState(
    initialValue === 1 ? 1 : initialValue === 2 ? 2 : 3
  );
  const [isHovered, setIsHovered] = useState(null);
  console.log(initialValue)

  // FormBox.jsx
  const handleButtonClick = (buttonNumber) => {
    // 선택된 버튼이 현재 선택된 버튼과 같은지 확인
    if (selectedButton === buttonNumber) {
      setSelectedButton(null);
      // 부모 컴포넌트의 콜백 함수 호출, null을 전달
      onChange(null);
    } else {
      // 현재 버튼의 번호에 따라 값을 조정하여 전달
      const adjustedValue = buttonNumber === 1 ? 1 : buttonNumber === 2 ? 2 : 0;
      setSelectedButton(buttonNumber);
      // 부모 컴포넌트의 콜백 함수 호출, 조정된 값을 전달
      onChange(adjustedValue);
    }
  };


  return (
    <div className="form-box">
      <h3>
        {question}
      </h3>
      <div className="button-container">
        {buttonTexts.map((text, index) => (
          <button
            key={index}
            className={`button-label ${selectedButton === index + 1 ? 'selected' : ''} ${
              isHovered === index + 1 ? 'hovered' : ''
            }`}
            onClick={() => handleButtonClick(index + 1)}
            onMouseEnter={() => setIsHovered(index + 1)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormBox;