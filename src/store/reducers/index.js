import { combineReducers } from "redux"
import pokeInfoReducer from "./pokeInfoReducer"

export const pokeReducers = combineReducers({
  selectedPokeInfo: pokeInfoReducer
})
