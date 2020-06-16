import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Card from '../components/cadr'
import {Button} from '../components/button'
import {Steps} from '../components/steps'
import {updateField, turn} from '../store/actions/actions'

function Field(props) {
  useEffect(() => {
    props.updateField(props.cards)
    // eslint-disable-next-line 
}, [])
  
  return (
    <div className="field">
      <div className="header">
        <h1>POKEMON</h1>
        <Steps 
          steps={props.step}
        />
      </div>      
      <div className="field__game">
        {props.cards.map((card, index) => {
          return (
            <Card 
              card={card}
              key={index}
              turn={props.turn}
            />
          ) 
        })}
      </div>
      <Button 
        updateField={props.updateField}
        cards={props.cards}
      />
  </div>
  )
}

function mapStateToProps(state) {
  return {
    cards: state.store.cards,
    step: state.store.step
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    updateField: (cards) => dispatch(updateField(cards)),
    turn: (value, index) => dispatch(turn(value, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
