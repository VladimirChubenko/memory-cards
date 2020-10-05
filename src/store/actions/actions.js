import {UPD_FIELD, SET_FIRST, SET_SECOND, TURN_ON, REFRESH_VALUES, STEP_UP, STEP_ZERO, WRONG_STEP_UP} from '../actions/actionTypes'

export function updateField(array) { 
  return async dispatch => {
    dispatch(stepZero())
    setTimeout(() => {
      dispatch(refreshField(array))
    }, 1000);
  }
}

export function turn(value) {
  return async (dispatch, getState) => {
    
    if (getState().store.first === null && getState().store.second === null) {
      // set first card
      dispatch(setFirst(value))
    } else if (getState().store.second === null) {
      // set second card
      dispatch(setSecond(value))
      // compare
      if(getState().store.first === getState().store.second) {
        dispatch(turnOn(getState().store.cards, getState().store.first))
        // refresh     
        dispatch(refreshValues()) 
        dispatch(stepUp(getState().store.step))    
      } else {
        // refresh
        setTimeout(() => {
          dispatch(refreshValues())
        }, 1000);
        dispatch(wrongStepUp(getState().store.step, getState().store.wrongStep))
      }
    }
  }
}

function setFirst(value) {
  return {
    type: SET_FIRST,
    payload: value
  }
}

function setSecond(value) {
  return {
    type: SET_SECOND,
    payload: value
  }
}

function turnOn(arr, value) {
  const payload = arr.map(elem => {
    if(elem.value === value) {
      elem.turned = true
    }
    return elem   
  })
  return {
    type: TURN_ON,
    payload
  }
}

function refreshValues() {
  return {
    type: REFRESH_VALUES
  }
}

function stepUp(val) {
  return {
    type: STEP_UP,
    payload: val
  }
}

function wrongStepUp(step, wrong) {
  return {
    type: WRONG_STEP_UP,
    step: step,
    wrong: wrong
  }
}

function stepZero() {
  return {
    type: STEP_ZERO
  }
}

function refreshField(array) {
  let payload = array.map(elem => elem = {...elem, turned: false})
   payload.sort(function(){
    return Math.random() - 0.5;
  })
  return {
    type: UPD_FIELD,
    payload
  }
}
