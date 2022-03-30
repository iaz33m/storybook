import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Checkbox from "./stories/Checkbox/Checkbox";
// import Test from 'net-number/src/components/test.jsx';
import Grid from 'net-number2/src/components/Grid/Grid';
import Test from './test'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Test/>
    </div>
  );
}

export default App;
