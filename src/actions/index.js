import * as actions from "./actionTypes"

export const toggleMapButtonOverlay = (state) => {
  if(state===false)
    return {
      type: actions.MAPBUTTON_OVERLAY_CLOSE
    }
  return {
    type: actions.MAPBUTTON_OVERLAY_OPEN
  }

}

export const toggleCourseModal = (state) => {
  if(state===false)
    return {
      type: actions.COURSEMODAL_CLOSE
    }
  return {
    type: actions.COURSEMODAL_OPEN
  }

}

export const toggleCourseInfoModal = (state) => {
  if(state===false)
    return {
      type: actions.COURSEINFO_MODAL_CLOSE
    }
  return {
    type: actions.COURSEINFO_MODAL_OPEN
  }

}

export const toggleInfoModal = (state) => {
  if(state===false)
    return {
      type: actions.INFOMODAL_CLOSE
    }
  return {
    type: actions.INFOMODAL_OPEN
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

