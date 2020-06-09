import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Card} from '../components/cadr'
import {Button} from '../components/button'
import {updateField, turn} from '../store/actions/actions'

function Field(props) {
  useEffect(() => {
    props.updateField(props.cards)
    // eslint-disable-next-line 
}, [])
  
  return (
    <div className="field">
      <h1>Memory</h1>
      <div className="field__game">
        {props.cards.map((card, index) => {
          return (
            <Card 
              card={card}
              key={index}
              turn={props.turn}
              second={props.second}
              step={props.step}
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
    first: state.store.first,
    second: state.store.second,
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
