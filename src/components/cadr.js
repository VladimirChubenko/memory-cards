import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function Card({wrongStep, second, start, card, turnOver}) {

  const [turn, setTurn] = useState(false)
  useEffect(() => {
      setTimeout(() => {
        setTurn(false)
      }, 1000)  
  }, [wrongStep])
    
  return (
    <div 
      className="card"
      onClick={() => {
        if(!turn && !card.turned && second === null) {
          setTurn(true)
          turnOver(card.value)
        }
      }}
    >
      {card.turned || turn || start
        ? <div className={card.value + ` open`}></div> 
        : <div className="ball"></div> 
      } 
  </div>
  )
 }

 function mapStateToProps(state) {
  return {
    second: state.store.second,
    wrongStep: state.store.wrongStep,
    start: state.store.start
  }
}

 export default connect(mapStateToProps)(Card)
 