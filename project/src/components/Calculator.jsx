import React, { useState } from 'react'
import Display from './Display'
import Buttons from './Buttons'
import '../styles/calculator.css'
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operand, setOperand] = useState(null);
  const [operation, setOperation] = useState(null);

  function handleButtonClick(buttonValue){
    if (!isNaN(buttonValue)) {
      if(displayValue != '0') {
        setDisplayValue(displayValue + buttonValue);
      } else {
      setDisplayValue(buttonValue.toString());
      }
    } else if (buttonValue === 'C') {
      setDisplayValue('0');
    } else if (buttonValue === '=') {
      if (operation === '/') {
        setDisplayValue((operand / parseFloat(displayValue)).toString());
      } else if (operation === '*') {
        setDisplayValue((operand * parseFloat(displayValue)).toString());
      } else if (operation === '-') {
        setDisplayValue((operand - parseFloat(displayValue)).toString());
      } else if (operation === '+') {
        setDisplayValue((operand + parseFloat(displayValue)).toString());
      }
      setOperand(null);
      setOperation(null);
    } else if (buttonValue === '±') {
      setDisplayValue((displayValue * -1).toString());
    } else if(buttonValue === '%') {
      setDisplayValue((displayValue / 100).toString());
    }  else if (buttonValue === '÷') {
      setOperand(parseFloat(displayValue));
      setOperation('/');
      setDisplayValue('0');
    } else if (buttonValue === '×') {
      setOperand(parseFloat(displayValue));
      setOperation('*');
      setDisplayValue('0');
    } else if (buttonValue === '-') {
      setOperand(parseFloat(displayValue));
      setOperation('-');
      setDisplayValue('0');
    } else if (buttonValue === '+') {
      setOperand(parseFloat(displayValue));
      setOperation('+');
      setDisplayValue('0');
    } else if (buttonValue === '.') {
      if (!displayValue.includes('.')) {
        setDisplayValue(displayValue + '.');
      }
    } }
  return (
    <div className='CalculatorDiv'>
      <Display value={displayValue}/>
      <Buttons onButtonClick={handleButtonClick}/>
    </div>
  )
} 

export default Calculator 
