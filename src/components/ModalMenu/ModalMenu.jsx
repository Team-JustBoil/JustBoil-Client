import React from 'react';
import './ModalMenu.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 모달 내용 */}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Modal;
