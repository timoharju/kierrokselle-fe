import * as actions from "../actions/actionTypes"

export const greyModalReducer = ( state=false, action ) => {
  switch(action.type) {
    case actions.GREYMODAL_CLOSE:
      return true
    default:
      return state
  }
}

export const sidebarReducer = ( state=false, action ) => {
  switch(action.type) {
    case actions.SIDEBAR_HIDE:
      return true
    case actions.SIDEBAR_SHOW:
      return false
    default:
      return state
  }
}

export const userLocationReducer = ( state=false, action ) => {
  switch(action.type) {
    case actions.USER_LOCATION_FOUND:
      return true
    case actions.USER_LOCATION_NOT_FOUND:
      return false
    default:
      return state
  }
}

export const userCoordinatesReducer = ( state = [], action ) => {
  switch(action.type) {
    case actions.ADD_COORDINATES:
      return [
        ...state,
        {
          lat: action.payload.lat,
          lng: action.payload.lng,
        }
      ]
    default:
      return state
  }
}

