import './App.css';
import './reset.css'
import CardMirror from './components/card-mirror';
import CardInfo from './components/card-info';
import React, {useState} from 'react';
import CompleteState from './components/complete-state';
import { InfoProvider } from './InfoContext';
import { ErrorProvider } from './ErrorContext'; 

function App() {

  const [screen, setScreen] = useState(0);
  
  function next() {
    setScreen (screen + 1)
  }

  const screens = [
    <CardInfo submit={next}/>, 
    <CompleteState />
  ]

  return (
    <ErrorProvider>
      <InfoProvider> 
        <div className="App">
          <CardMirror />
          {screens[screen]}
        </div>
      </InfoProvider>
    </ErrorProvider>
  );
}

export default App;
