import React from 'react'
import {connect} from 'react-redux'
import Card from '../components/cadr'
import {Button} from '../components/button'
import {Steps} from '../components/steps'
import {updateField, turn} from '../store/actions/actions'

function Field({step, cards, turnOver, start, updateField}) {
  return (
    <div className="field">
      <div className="header">
        <h1>POKEMON</h1>
        <Steps 
          steps={step}
        />
      </div>      
      <div className="field-game">
        {cards.map((card, index) => {
          return (
            <Card 
              card={card}
              key={index}
              turnOver={turnOver}
            />
          ) 
        })}
      </div>
      <Button 
        updateField={updateField}
        cards={cards}
        start={start}
      />
  </div>
  )
}

function mapStateToProps(state) {
  return {
    cards: state.store.cards,
    step: state.store.step,
    start: state.store.start
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    updateField: (cards) => dispatch(updateField(cards)),
    turnOver: (value, index) => dispatch(turn(value, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
