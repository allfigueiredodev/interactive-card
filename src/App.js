import './App.css';
import './reset.css'
import CardMirror from './components/card-mirror';
import CardInfo from './components/card-info';
// import CompleteState from './components/complete-state';

function App() {
  return (
    <div className="App">
      <CardMirror />
      <CardInfo />
      {/* <CompleteState /> */}
    </div>
  );
}

export default App;
