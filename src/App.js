import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setrandomNumber] = useState(0);

  useEffect(() => {
    generateRandomNumber();
  }, []);
  
  function generateRandomNumber() {
    let randomNumber = Math.floor(10000 + Math.random()*(99999 + 1 - 10000));

    while(randomNumber % 3 !== 0) {
      randomNumber = Math.floor(10000 + Math.random()*(99999 + 1 - 10000));
    }

    setrandomNumber(randomNumber);
  }



  return (
    <>
      <div className = "container">
        <h1 className = "randomNumber">{randomNumber}</h1>
        <button className = "randomNumberButton" onClick = {generateRandomNumber}>More Pizza!</button>
      </div>

      <div className = "footer">
        <p>Made by Omkar</p>
        
      </div>
    </>
  );
}

export default App;
