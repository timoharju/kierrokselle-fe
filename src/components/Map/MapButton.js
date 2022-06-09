import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleMapButtonOverlay } from "../../actions"

const MapButton = () => {

  const dispatch = useDispatch()
  const mapButtonOverlayIsClosed = useSelector(state => state.mapButtonOverlayIsClosed)

  return (
    <button onClick={() => dispatch(toggleMapButtonOverlay(mapButtonOverlayIsClosed))} to="/map" className="bg-gray-600 hover:bg-slate-700 text-white font-bold py-6 px-6 max-w-[12rem]">
      <p className="text-2xl">AUKAISE KARTTA JA ETSI RATOJA</p>
    </button>
  )
}

export default MapButton