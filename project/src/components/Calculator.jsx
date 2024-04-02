import React from 'react'
import Display from './Display'
import Buttons from './Buttons'
import '../styles/calculator.css'
const Calculator = () => {
  return (
    <div className='CalculatorDiv'>
      <Display />
      <Buttons />
    </div>
  )
}

export default Calculator
