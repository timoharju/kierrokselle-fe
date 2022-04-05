export const toggleModal = (state) => {
  if (state===true)
    return {
      type: "CLOSED"
    }
  return {
    type: "HIDE"
  }
}
