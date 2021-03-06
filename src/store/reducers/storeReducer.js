import {UPD_FIELD, SET_FIRST, SET_SECOND, TURN_ON, REFRESH_VALUES, STEP_UP, STEP_ZERO, WRONG_STEP_UP} from '../actions/actionTypes'

const variables = [
  {value: 'one', turned: false},
  {value: 'two', turned: false},
  {value: 'three', turned: false},
  {value: 'four', turned: false},
  {value: 'five', turned: false},
  {value: 'six', turned: false},
  {value: 'seven', turned: false},
  {value: 'eight', turned: false},
]

const initialState = {
  cards: [...variables, ...variables],
  first: null,
  second: null,
  start: true,
  wrongStep: 0,
  step: 0
}

export default function storeReducer(state = initialState, action) {
  switch(action.type) {
    case UPD_FIELD:
      return {
        ...state,
        cards: [...action.payload],
        first: null,
        second: null,
        start: false
      }
    case SET_FIRST:
        return {
          ...state,
          first: action.payload
        }
    case SET_SECOND:
        return {
          ...state,
          second: action.payload
        }
    case TURN_ON:
      return {
        ...state,
        cards: action.payload
      }
    case REFRESH_VALUES:
      return {
        ...state,
        first: null,
        second: null
      }
    case STEP_UP:
        return {
          ...state,
          step: action.payload + 1
        }
    case WRONG_STEP_UP:
        return {
          ...state,
          step: action.step + 1,
          wrongStep: action.wrong + 1
        }
    case STEP_ZERO:
        return {
          ...state,
          step: 0,
          wrongStep: 0
        }
    default:
       return state
  }
}