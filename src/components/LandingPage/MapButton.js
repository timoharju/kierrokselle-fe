import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "../../actions/modalAction"

const MapButton = () => {

  const dispatch = useDispatch()
  const isClicked = useSelector(state => state.isClicked)

  return (
    <button onClick={() => dispatch(toggleModal(isClicked))} to="/map" className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-6 px-6  text-lg">
      <p className="text-2xl">Etsi lähimmät radat</p>
    </button>
  )
}

export default MapButton