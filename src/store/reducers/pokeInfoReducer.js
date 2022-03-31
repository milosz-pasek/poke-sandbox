import { FETCH_POKES } from "../actionTypes"

const INITIAL_STATE = {
  selectedPokeId: null,
  selectedPokeInfo: null
}

const pokeInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POKES:
      return state
    default:
      return state
  }
}

export default pokeInfoReducer
