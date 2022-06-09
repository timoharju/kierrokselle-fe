import * as actions from "../actions/actionTypes"

export const mapButtonOverlayReducer = ( state=false, action ) => {
  switch(action.type) {
    case actions.MAPBUTTON_OVERLAY_CLOSE:
      return true
    case actions.MAPBUTTON_OVERLAY_OPEN:
      return false
    default:
      return state
  }
}

export const courseModalReducer = (state=true, action) => {
  switch(action.type) {
    case actions.COURSEMODAL_CLOSE:
      return true
    case actions.COURSEMODAL_OPEN:
      return false
    default:
      return state
  }
}

export const courseInfoModalReducer = (state=true, action) => {
  switch(action.type) {
    case actions.COURSEINFO_MODAL_CLOSE:
      return true
    case actions.COURSEINFO_MODAL_OPEN:
      return false
    default:
      return state
  }
}

export const infoModalReducer = (state=true, action) => {
  switch(action.type) {
    case actions.INFOMODAL_CLOSE:
      return true
    case actions.INFOMODAL_OPEN:
      return false
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

