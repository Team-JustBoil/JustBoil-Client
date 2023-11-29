// hooks/useFormBox.js
import { useState } from 'react';

const useFormBox = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleFormBoxChange = (index, selectedValue) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = selectedValue;
    setSelectedValues(newSelectedValues);
  };

  const handleCheck = () => {
    const conditions = {
        '2,2,2,2' : 1,
        '0,2,2,2' : 2,
        '1,2,2,2' : 3,
        '2,0,2,2' : 4,
        '2,1,2,2' : 5,
        '2,2,0,2' : 6,
        '2,2,1,2' : 7,
        '2,2,2,0' : 8,
        '2,2,2,1' : 9,
        '0,0,2,2' : 10,
        '0,1,2,2' : 11,
        '1,0,2,2' : 12,
        '1,1,2,2' : 13,
        '0,2,0,2' : 14,
        '0,2,1,2' : 15,
        '1,2,0,2' : 16,
        '1,2,1,2' : 17,
        '0,2,2,0' : 18,
        '0,2,2,1' : 19,
        '1,2,2,0' : 20,
        '1,2,2,1' : 21,
        '2,0,0,2' : 22,
        '2,0,1,2' : 23,
        '2,1,0,2' : 24,
        '2,1,1,2' : 25,
        '2,0,2,0' : 26,
        '2,0,2,1' : 27,
        '2,1,2,0' : 28,
        '2,1,2,1' : 29,
        '2,2,0,0' : 30,
        '2,2,0,1' : 31,
        '2,2,1,1' : 32,
        '0,0,0,2' : 33,
        '0,0,1,2' : 34,
        '0,1,0,2' : 35,
        '1,0,0,2' : 36,
        '1,0,1,2' : 37,
        '1,1,0,2' : 38,
        '1,1,1,2' : 39,
        '0,0,2,0' : 40,
        '0,0,2,1' : 41,
        '0,1,2,0' : 42,
        '0,1,2,1' : 43,
        '1,0,2,0' : 44,
        '1,0,2,1' : 45,
        '1,1,2,1' : 46,
        '0,2,0,0' : 47,
        '0,2,0,1' : 48,
        '0,2,1,1' : 49,
        '1,2,0,0' : 50,
        '1,2,0,1' : 51,
        '1,2,1,1' : 52,
        '2,0,0,0' : 53,
        '2,0,0,1' : 54,
        '2,0,1,1' : 55,
        '2,1,0,0' : 56,
        '2,1,0,1' : 57,
        '2,1,1,1' : 58,
        '0,0,0,0' : 59,
        '0,0,0,1' : 60,
        '0,0,1,1' : 61,
        '0,1,0,0' : 62,
        '0,1,0,1' : 63,
        '1,0,0,0' : 64,
        '1,0,0,1' : 65,
        '1,0,1,1' : 66,
        '1,1,0,1' : 67,
        '1,1,1,1' : 68
    };

    const conditionStr = selectedValues.join(',');
    const result = conditions[conditionStr];

    if (
        selectedValues.length !== 4 ||
        selectedValues.every(value => value === undefined || value === null) ||
        selectedValues.some(value => ![0, 1, 2].includes(value))
      ) {
        console.log('모든 FormBox를 선택하세요.');
      } else if (result !== undefined) {
        console.log(`배열이 [${conditionStr}]입니다. ${result}을 넘깁니다.`);
      } else {
        console.log(`배열이 [${conditionStr}]입니다. ${69}을 넘깁니다.`);
      }
    };

  return {
    selectedValues,
    handleFormBoxChange,
    handleCheck,
  };
};

export default useFormBox;