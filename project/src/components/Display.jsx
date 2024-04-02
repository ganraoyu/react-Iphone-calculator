import React from 'react'
import '../styles/display.css'

const Display = ({ value }) => {
  return (
    <div className='DisplayDiv'>
      <p>{parseFloat(parseFloat(value).toFixed(5))}</p>
    </div>
  )
}

export default Display
