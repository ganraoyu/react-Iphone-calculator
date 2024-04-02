import React, { useState } from 'react'
import '../styles/buttons.css'

const Buttons = ( {onButtonClick }) => {
  const [buttons, setButtons] = useState(['C', '±', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']);

  return (
    <div className='Button'>
      {buttons.map((button, index) => (
        <button className="button"key={index} onClick={() => onButtonClick(button)}>{button}</button>
      ))}
    </div>
  )
}

export default Buttons
