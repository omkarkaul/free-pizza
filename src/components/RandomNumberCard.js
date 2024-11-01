import React, { useState, useEffect } from 'react';
import CopyButton from './CopyButton';
import { getFourDigitCode, getParsedPizzaCode } from '../utils/pizzaCodeGenerator';

function RandomNumberCard({ title, startingNumber }) {
    const [randomNumber, setRandomNumber] = useState(0);
    const [copied, setCopied] = useState(false);
    
    useEffect(() => {
        getPizzaCode();
    }, []);
    
    function getPizzaCode() {
      let randomNumber = getFourDigitCode();
      let parsedPizzaCode = getParsedPizzaCode(randomNumber, startingNumber);
      while(parsedPizzaCode % 3 !== 0) {
        randomNumber = getFourDigitCode();
        parsedPizzaCode = getParsedPizzaCode(randomNumber, startingNumber);
      }
  
      setRandomNumber(parsedPizzaCode);
      setCopied(false);
    }

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(randomNumber.toString());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return (
        <div className='randomNumberCard'>
            <h5>{title}</h5>
            <div className="codeContainer">
                <div 
                    className="randomNumber" 
                    onClick={copyToClipboard} 
                    title="Click to copy"
                >
                    {randomNumber}
                </div>
                <CopyButton onClick={copyToClipboard} />
            </div>
            <div className={`copied ${copied ? 'show' : ''}`}>
                Copied! ✓
            </div>
            <button className="randomNumberButton" onClick={getPizzaCode}>
                <b>More Pizza!</b>
            </button>
        </div>
    );
}

export default RandomNumberCard;
