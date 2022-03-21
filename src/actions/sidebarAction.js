export const toggleSidebar= (state) => {
  if (state===false)
    return {
      type: "SHOW"
    }
  else
    return {
      type: "HIDE"
    }

}

