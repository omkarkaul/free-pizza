import React, { useState, useEffect } from 'react';

function RandomNumberCard(props) {
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
      return parseInt(props.startingNumber+pizza_code.toString());
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
        <div className='randomNumberCard'>
            <h5>{props.title}</h5>
            <h1 className = "randomNumber">{randomNumber}</h1>
            <button className = "randomNumberButton" onClick = {getPizzaCode}><b>More Pizza!</b></button>
        </div>
    )
}

export default RandomNumberCard