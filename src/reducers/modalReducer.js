const modalReducer = ( state=true, action ) => {
  switch(action.type) {
    case "OPEN":
      return true
    case "CLOSED":
      return false
    default:
      return state
  }
}

export default modalReducer