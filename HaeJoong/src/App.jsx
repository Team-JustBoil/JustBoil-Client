import { useState } from 'react'
import TopBar from './components/TopBar/TopBar';
import FormBox from './components/FormBox/FormBox';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
//import PrimeReactButton from './components/PrimeReactButton/PrimeReactButton';

function App() {
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
        />

        {/* 두 번째 FormBox */}
        <FormBox
          question="요리 유튜브의 얼굴"
          buttonCount={3}
          buttonTexts={['O', '모두', 'X']}
        />

        {/* 세 번째 FormBox */}
        <FormBox
          question="요리 유튜버의 성향"
          buttonCount={3}
          buttonTexts={['예능', '모두', '정석']}
        />

        <FormBox
          question="요리 유튜버의 멘트"
          buttonCount={3}
          buttonTexts={['자막', '모두', '말']}
        />

        <FormBox
          question="네 번째 질문"
          buttonCount={3}
          buttonTexts={['예', '끼얏호우', '아니오']}
        />

        <FormBox
          question="다섯 번째 질문"
          buttonCount={2}
          buttonTexts={['예', '아니오']}
        />
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        <p>This is the main area.</p>
        {/* 나머지 내용 */}
        {/* ... */}
      </main>

      <footer>
        <NavigationBar />
      </footer>
    </div>
  )
}

export default App
