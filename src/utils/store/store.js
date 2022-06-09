import { combineReducers, createStore, applyMiddleware, compose } from "@reduxjs/toolkit"
import { loadState, saveState } from "./stateSessionStorage"
import { sidebarReducer, mapButtonOverlayReducer, userLocationReducer, userCoordinatesReducer, courseModalReducer, courseInfoModalReducer, infoModalReducer  } from "../../reducers"
import thunk from "redux-thunk"

const allReducers = combineReducers({
  sidebarIsToggled : sidebarReducer,
  mapButtonOverlayIsClosed : mapButtonOverlayReducer,
  userIsLocated : userLocationReducer,
  userLocationCoordinates: userCoordinatesReducer,
  courseInfoModalIsClosed: courseInfoModalReducer,
  courseModalIsClosed: courseModalReducer,
  infoModalIsClosed: infoModalReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = process.env.NODE_ENV !== "production" ?
  [require("redux-immutable-state-invariant").default(), thunk] :
  [thunk]

const persistedState = loadState()

const store = createStore(allReducers, persistedState, composeEnhancer(applyMiddleware(...middleware)))

store.subscribe(() =>  {
  saveState(store.getState())
})

export default store