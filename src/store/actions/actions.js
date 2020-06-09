import {UPD_FIELD, SET_FIRST, SET_SECOND, TURN_ON, REFRESH_VALUES, STEP_UP} from '../actions/actionTypes'

export function updateField(array) { 
  array.forEach(elem => elem.turned = false)
  const payload = array.sort(function(){
    return Math.random() - 0.5;
  })
  return {
    type: UPD_FIELD,
    payload
  }
}

export function turn(value) {
  return async (dispatch, getState) => {
    
    if (getState().store.first === null) {
      // set first
      dispatch(setFirst(value))

    } else {
      // set second
      dispatch(setSecond(value))
      
      // сравнить first и second
      if(getState().store.first === getState().store.second) {

        // заморозить пару 
        dispatch(turnOn(getState().store.cards, getState().store.first))
        // обнулить first и second
        dispatch(refreshValues())
      } else {
        // сбросить состояние

        // обнулить first и second
        dispatch(refreshValues())
        dispatch(stepUp(getState().store.step))
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