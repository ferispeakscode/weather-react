import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Weather />
      </header>
    </div>
  );
}

export default App;
