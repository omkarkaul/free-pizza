import React from 'react';
import './App.css';
import RandomNumberCard from './components/RandomNumberCard';

function App() {
  return (
    <>
      <div className = "container">
        <div className = 'cardContainer'>
          <RandomNumberCard title="Old style code" startingNumber="2"/>
          <RandomNumberCard title="New code #1" startingNumber="5"/>
          <RandomNumberCard title="New code #2" startingNumber="8"/>
        </div>
        <h5 className = "infoLink"> <a href = "https://github.com/omkarkaul/free-pizza">What even is this?</a></h5>
      </div>

      <div className = "footer">
        <p className = "sig">Made by Omkar :)</p>
      </div>
    </>
  );
}

export default App;
