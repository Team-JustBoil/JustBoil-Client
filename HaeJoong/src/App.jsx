// App.jsx
import React from 'react';
import TopBar from './components/TopBar/TopBar';
import FormBox from './components/FormBox/FormBox';
import NavigationBar from './components/NavigationBar/NavigationBar';
import useFormBox from './hooks/useFormBox'; // 경로를 올바르게 수정하세요
import './App.css';

function App() {
  const { selectedValues, handleFormBoxChange, handleCheck } = useFormBox();

  return (
    <div className="App">
      <header>
        <TopBar />
      </header>

      <main>
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

        <button onClick={handleCheck}>
          확인
        </button>
      </main>

      <footer>
        <NavigationBar />
      </footer>
    </div>
  );
}

export default App;
