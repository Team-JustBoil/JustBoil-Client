import React, { useState } from 'react';
import FormBox from './ModalCp/FormBox/FormBox';
import useFormBox from './hooks/useFormBox';
import './ModalMenu.css';
import closeBtnImage from './closebtn.png';

function ModalMenu({ isOpen, onClose, onPrivateNumChange, privateNum }) {
  const { selectedValues, handleFormBoxChange, handleCheck, getConditionKey} = useFormBox(privateNum);
  const conditionKey = getConditionKey();
  // console.log('g', conditionKey)
  const handleConfirmClick = () => {
    let result = handleCheck();
    if (result !== null) {
      console.log('Selected values:', selectedValues);
      onPrivateNumChange(result);
    }
  };
  // console.log("modalPrivateNum = ", privateNum);

  const isConfirmButtonDisabled = selectedValues.some(value => value === undefined || value === null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          className={`close-btn ${isConfirmButtonDisabled ? 'disabled' : ''}`}
          src={closeBtnImage}
          alt="Close Button"
          onClick={() => {
            if (!isConfirmButtonDisabled) {
              onClose();
              handleConfirmClick();
            }
          }}
        />
        {/* 첫 번째 FormBox */}
        <FormBox
          question="요리 유튜버의 성별"
          buttonCount={3}
          buttonTexts={['남성', '모두', '여성']}
          onChange={(selectedValue) => handleFormBoxChange(0, selectedValue)}
          initialValue={parseInt(conditionKey[0], 10)}
        />
        <br />
        <br />
        {/* 두 번째 FormBox */}
        <FormBox
          question="요리 유튜브의 얼굴"
          buttonCount={3}
          buttonTexts={['O', '모두', 'X']}
          onChange={(selectedValue) => handleFormBoxChange(1, selectedValue)}
          initialValue={parseInt(conditionKey[2], 10)}
        />
        <br />
        <br />
        {/* 세 번째 FormBox */}
        <FormBox
          question="요리 유튜버의 성향"
          buttonCount={3}
          buttonTexts={['예능', '모두', '정석']}
          onChange={(selectedValue) => handleFormBoxChange(2, selectedValue)}
          initialValue={parseInt(conditionKey[4], 10)}
        />
        <br />
        <br />
        <FormBox
          question="요리 유튜버의 멘트"
          buttonCount={3}
          buttonTexts={['말', '모두', '자막']}
          onChange={(selectedValue) => handleFormBoxChange(3, selectedValue)}
          initialValue={parseInt(conditionKey[6], 10)}
        />
      </div>
    </div>
  );
}

export default ModalMenu;