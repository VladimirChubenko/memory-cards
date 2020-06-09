import {UPD_FIELD, SET_FIRST, SET_SECOND} from '../actions/actionTypes'

export function updateField(array) { 
  const payload = array.sort(function(){
    return Math.random() - 0.5;
  })
  return {
    type: UPD_FIELD,
    payload
  }
}

export function turn(card1, card2, value) {
  return async (dispatch, getState) => {
    
    if (card1 === null) {
      // set first
      dispatch(setFirst(value))
      console.log('card1', getState().store.first);
    } else {
      // set second
      dispatch(setSecond(value))
      console.log('card2', getState().store.second);
      
      // сравнить first и second
      if(getState().store.first === getState().store.second) {
        console.log("WIN")
        // заморозить пару
        // обнулить first и second
      } else {
        console.log("TRY AGAIN")
        // сбросить состояние
        // обнулить first и second
      }
    }
  }
}

function setFirst(value) {
  console.log('value', value);
  return {
    type: SET_FIRST,
    payload: value
  }
}


function setSecond(value) {
  console.log('value', value);
  return {
    type: SET_SECOND,
    payload: value
  }
}