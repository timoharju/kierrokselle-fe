import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { closeGreyModal } from "../../actions"

const MapButton = () => {

  const dispatch = useDispatch()
  const greyModalIsClosed = useSelector(state => state.greyModalIsClosed)

  return (
    <button onClick={() => dispatch(closeGreyModal(greyModalIsClosed))} to="/map" className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-6 px-6  text-lg">
      <p className="text-2xl">Etsi lähimmät radat</p>
    </button>
  )
}

export default MapButton