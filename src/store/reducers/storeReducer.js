import {UPD_FIELD, SET_FIRST, SET_SECOND} from '../actions/actionTypes'

const variables = ['one', 'two', 'trhee', 'four', 'five', 'six', 'seven', 'eight']

const initialState = {
  cards: [...variables, ...variables],
  first: null,
  second: null
}

export default function storeReducer(state = initialState, action) {
  switch(action.type) {
    case UPD_FIELD:
      return {
        ...state,
        cards: [...action.payload]
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
    default:
       return state
  }
}