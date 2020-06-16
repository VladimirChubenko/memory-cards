import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function Card(props) {
  
  const [turn, setTurn] = useState(false)
  const value = props.card.value
  const {wrongStep, second} = props

   useEffect(() => {
       setTimeout(() => {
         setTurn(false)
       }, 1000)  
    }, [wrongStep])
    
    return (
      <div 
      className="card"
      onClick={() => {
        if(!turn && !props.card.turned && second === null) {
          setTurn(true)
          props.turn(value)
        }
      }}
    >
      {props.card.turned || turn
        ? <div className={value + ` open`}></div> 
        : <div className="ball"></div> 
      } 
    </div>
   )
 }

 function mapStateToProps(state) {
  return {
    second: state.store.second,
    wrongStep: state.store.wrongStep
  }
}

 export default connect(mapStateToProps)(Card)
 