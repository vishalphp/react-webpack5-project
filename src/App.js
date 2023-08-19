import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className='imagelogo'><img src={logo} alt="logo"/></div>
      <h1 className='headingcolor'>webpack + React</h1>
    </div>
  );
}

export default App;
