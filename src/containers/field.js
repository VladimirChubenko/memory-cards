import React from 'react'
import {connect} from 'react-redux'
import {Card} from '../components/cadr'
import {Button} from '../components/button'
import {updateField, turn} from '../store/actions/actions'

function Field(props) {
  
  return (
    <div className="field">
      <h1>Memory</h1>
      <hr/>
      <div className="field__game">
        {props.cards.map(card => {
          return (
            <Card 
              value={card}
              key={Math.random()}
              first={props.first}
              second={props.second}
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
    first: state.store.first,
    second: state.store.second
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    updateField: (cards) => dispatch(updateField(cards)),
    turn: (card1, card2, value) => dispatch(turn(card1, card2, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
