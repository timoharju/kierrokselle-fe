import { combineReducers, createStore, applyMiddleware, compose } from "@reduxjs/toolkit"
import { loadState, saveState } from "./sessionStorage"
import { sidebarReducer, greyModalReducer, userLocationReducer, userCoordinatesReducer } from "../../reducers"
import thunk from "redux-thunk"

const allReducers = combineReducers({
  sidebarIsToggled : sidebarReducer,
  greyModalIsClosed : greyModalReducer,
  userIsLocated : userLocationReducer,
  userLocationCoordinates: userCoordinatesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = process.env.NODE_ENV !== "production" ?
  [require("redux-immutable-state-invariant").default(), thunk] :
  [thunk]

const persistedState = loadState()

const store = createStore(allReducers, persistedState, composeEnhancer(applyMiddleware(...middleware)))

store.subscribe(() =>  {
  console.log(store.getState())
  saveState(store.getState())
})

export default store