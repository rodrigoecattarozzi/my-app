import React from 'react';
import Login from './Login';
import NavBar from './NavBar';
import OsList from './OsList';
import Register from './Register';


function App() {

  return (
    <div>
      <header>
        <NavBar /> 
      </header>
      <div className="container">
        <Login />

        <Register />

        <OsList />
      </div>
    </div>
  );
}

export default App;
