import React from 'react';
import NavBar from './NavBar';
import FooterCmp from './FooterCmp';
import SearchModule from './SearchModule';

import './App.css';
import './materialize.css';

function App() {
  

  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <SearchModule />
        
      </header>

      <FooterCmp />
    </div>
  );
}

export default App;
