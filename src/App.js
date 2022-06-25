import React from 'react';
import NavBar from './NavBar';
import FooterCmp from './FooterCmp';

import logo from './logo.svg';
import './App.css';
import './materialize.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today
        </a>
      </header>

      <FooterCmp />
    </div>
  );
}

export default App;
