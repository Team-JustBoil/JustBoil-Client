import React, { useState } from 'react';
import './FormBox.css';

const FormBox = ({ question, buttonCount, buttonTexts, onChange }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    if (selectedButton === buttonNumber) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonNumber);
    }

    // 부모 컴포넌트의 콜백 함수 호출
    onChange(selectedButton === buttonNumber ? null : buttonNumber - 1);
  };

  return (
    <div className="form-box">
      <h3>
        {question} {selectedButton !== null ? `${selectedButton - 1}` : 'X'}
      </h3>
      <br />
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