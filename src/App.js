import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import Dashboard from './components/dashboard';

const TRACKING_ID = 'G-B15LSRRCQ1';
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Dashboard></Dashboard>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
