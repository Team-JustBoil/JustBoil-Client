import React, { useState } from 'react';
import './FormBox.css';

const FormBox = ({ question, buttonCount, buttonTexts }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    // 이미 선택된 버튼을 눌렀을 경우 선택 해제
    if (selectedButton === buttonNumber) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonNumber);
    }
  };

  return (
    <div className="form-box">
      {/* <p>{selectedButton ? `${selectedButton}` : 'X'}</p> */}
      <h3>{question} {selectedButton ? `${selectedButton-1}` : 'X'}</h3>
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
