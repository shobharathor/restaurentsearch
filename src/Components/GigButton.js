import React from 'react'
import './Button.css'

const GigButton = (props) => {
  
  return (
    <button
        onClick={props.onClick} 
        style={{
            color : props.fontColor,
            backgroundColor : props.backgroundKaColor,
            borderRadius : props.borderKaRadius,
            padding: "9px 1rem"
        }}
        className='button'
    >
        {props.children}
    </button>
  )
}

export default GigButton;