import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fine day, isn't it?</h1>
        <Weather />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
