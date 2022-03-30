import { combineReducers } from "redux"
import pokeInfoReducer from "./pokeInfoReducer"

const pokeReducers = combineReducers({
  selectedPokeInfo: pokeInfoReducer
})

export default pokeReducers
