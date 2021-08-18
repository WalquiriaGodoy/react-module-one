import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Laboratório <code>da</code> Wal
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/laboratoriodeforro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página do instagram
        </a>
      </header>
    </div>
  );
}

export default App;
