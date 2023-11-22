// FormButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FormButton.css';

const FormButton = ({ label, selected, onClick }) => {
  return (
    <button
      className={`button-label ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
