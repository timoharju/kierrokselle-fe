import * as actions from "./actionTypes"

export const closeGreyModal = () => {
  return {
    type: actions.GREYMODAL_CLOSE
  }
}

export const toggleSidebar = (state) => {
  if (state===false)
    return {
      type: actions.SIDEBAR_HIDE
    }
  return {
    type: actions.SIDEBAR_SHOW
  }
}

export const findUserLocationStatus = (state) => {
  if (state===false)
    return {
      type: actions.USER_LOCATION_NOT_FOUND
    }
  return {
    type: actions.USER_LOCATION_FOUND
  }
}

export const addUserCoordinates = (lat, lng)  => {
  return {
    type: actions.ADD_COORDINATES,
    payload: {
      lat: lat,
      lng: lng,
    }
  }
}

