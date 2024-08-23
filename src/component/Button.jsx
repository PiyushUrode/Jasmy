import React from 'react'
import "../style/Button.css"

const Button = ({ text1, text2 }) => {
  return (
<button className='btn'>
<span>{text1}</span>
<span>{text2}</span>
</button>
  )
}

export default Button