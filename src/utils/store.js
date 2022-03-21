import { combineReducers, createStore, applyMiddleware, compose } from "@reduxjs/toolkit"
import sidebarReducer from "../reducers/sidebarReducer"
import thunk from "redux-thunk"

const allReducers = combineReducers({
  isToggled:sidebarReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))

export default store