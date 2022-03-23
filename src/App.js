import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setrandomNumber] = useState(0);

  useEffect(() => {
      getPizzaCode();
  }, []);

  const getFourDigitCode = () => {
    let code = 1;
    while (code % 3 !== 0) {
      code = Math.floor(Math.random() * (9999-1000)) + 1000;
    }
    return code+1;
  }

  const getParsedPizzaCode = (pizza_code) => {
    return parseInt("2"+pizza_code.toString());
  }
  
  function getPizzaCode() {
    let randomNumber = getFourDigitCode();
    let parsedPizzaCode = getParsedPizzaCode(randomNumber);
    while(parsedPizzaCode % 3 !== 0) {
      randomNumber = getFourDigitCode();
      parsedPizzaCode = getParsedPizzaCode(randomNumber);
    }

    setrandomNumber(parsedPizzaCode);
  }



  return (
    <>
      <div className = "container">
        <h1 className = "randomNumber">{randomNumber}</h1>
        <button className = "randomNumberButton" onClick = {getPizzaCode}><b>More Pizza!</b></button>

        <h5 className = "infoLink"> <a href = "https://github.com/omkarkaul/free-pizza">What even is this?</a></h5>
      </div>

      <div className = "footer">
        <p className = "sig">Made by Omkar :)</p>
      </div>
    </>
  );
}

export default App;
