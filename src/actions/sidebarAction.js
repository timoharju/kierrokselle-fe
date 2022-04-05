export const toggleSidebar= (state) => {
  if (state===false)
    return {
      type: "SHOW"
    }
  return {
    type: "HIDE"
  }

}

