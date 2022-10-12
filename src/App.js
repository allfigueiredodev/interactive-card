import './App.css';
import './reset.css'
import CardMirror from './components/card-mirror';
import CardInfo from './components/card-info';
import React, {useState, useContext} from 'react';
import CompleteState from './components/complete-state';
import { InfoContext } from './InfoContext';
import { ErrorProvider } from './ErrorContext'; 

function App() {

  const {name: [name, setName]} = useContext(InfoContext);
  const {card: [cardNumber, setCardNumber]} = useContext(InfoContext);
  const {dateMM: [expDateMM, setExpDateMM]} = useContext(InfoContext);
  const {dateYY: [expDateYY, setExpDateYY]} = useContext(InfoContext);
  const {cvc: [cvc, setCvc]} = useContext(InfoContext);

  const [screen, setScreen] = useState(0);

  function next() { 
    if (screen === 0) {
    setScreen (screen + 1)
  } else {
    setScreen (0); 
    setName("JANE APPLESEED");
    setCardNumber("0000 0000 0000 0000");
    setExpDateMM("00");
    setExpDateYY("00");
    setCvc("000");
    // window.location.reload();
  }

}

  const screens = [
    <CardInfo submit={next}/>, 
    <CompleteState click={next} />
  ]

  return (
    <ErrorProvider>
        <div className="App">
          <CardMirror />
          {screens[screen]}
        </div>
    </ErrorProvider>
  );
}

export default App;
