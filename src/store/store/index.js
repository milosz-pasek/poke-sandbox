import { createStore, applyMiddleware, compose } from "redux"

import { pokeReducers } from "../reducers"

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  pokeReducers,
  composeEnchancers(applyMiddleware())
)
