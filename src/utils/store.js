import { combineReducers, createStore, applyMiddleware, compose } from "@reduxjs/toolkit"
import { loadState, saveState } from "./sessionStorage"
import sidebarReducer from "../reducers/sidebarReducer"
import modalReducer from "../reducers/modalReducer"
import thunk from "redux-thunk"

const allReducers = combineReducers({
  isToggled : sidebarReducer,
  isClicked : modalReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = process.env.NODE_ENV !== "production" ?
  [require("redux-immutable-state-invariant").default(), thunk] :
  [thunk]

const persistedState = loadState()

const store = createStore(allReducers, persistedState, composeEnhancer(applyMiddleware(thunk, ...middleware)))

store.subscribe(() =>  {
  console.log(store.getState())
  saveState(store.getState())
})

export default store