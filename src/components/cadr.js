import React, {useEffect, useState} from 'react'

 export function Card(props) {
  
   const [turn, setTurn] = useState(false)
   const value = props.card.value
   const {step} = props

  useEffect(() => {
    setTimeout(() => {
      setTurn(false)
    }, 1500);
  }, [step])
  
  return (
    <div 
      className="card"
      onClick={() => {
        setTurn(true)
        props.turn(value)
      }}
    >
      {props.card.turned || turn 
        ? <div className={value}></div> 
        : null
      } 
    </div>
   )
 }
