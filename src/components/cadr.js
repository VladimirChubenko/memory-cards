import React from 'react'

 export function Card(props) {

  const {first, second, value} = props
  
   return (
    <div 
      className="card"
      data-atr={value}
      onClick={() => props.turn(first, second, props.value)}
    >
      {value}
    </div>
   )
 }
