import React, { useState } from 'react';
import FormBox from './ModalCp/FormBox/FormBox';
import useFormBox from './hooks/useFormBox';
import './ModalMenu.css';

function Modal({  isOpen, onClose, onPrivateNumChange }) {
  const {selectedValues, handleFormBoxChange, handleCheck } = useFormBox();

  const handleConfirmClick = () => {
    let result = handleCheck();
    if (result !== null) {
      onPrivateNumChange(result);
    }
  }
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 첫 번째 FormBox */}
        <FormBox
          question="요리 유튜버의 성별"
          buttonCount={3}
          buttonTexts={['남성', '모두', '여성']}
          onChange={(selectedValue) => handleFormBoxChange(0, selectedValue)}
        />

        {/* 두 번째 FormBox */}
        <FormBox
          question="요리 유튜브의 얼굴"
          buttonCount={3}
          buttonTexts={['O', '모두', 'X']}
          onChange={(selectedValue) => handleFormBoxChange(1, selectedValue)}
        />

        {/* 세 번째 FormBox */}
        <FormBox
          question="요리 유튜버의 성향"
          buttonCount={3}
          buttonTexts={['예능', '모두', '정석']}
          onChange={(selectedValue) => handleFormBoxChange(2, selectedValue)}
        />

        <FormBox
          question="요리 유튜버의 멘트"
          buttonCount={3}
          buttonTexts={['자막', '모두', '말']}
          onChange={(selectedValue) => handleFormBoxChange(3, selectedValue)}
        />

        <button onClick={handleConfirmClick}>
          확인
        </button>
        
        <button onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
