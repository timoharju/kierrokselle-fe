import React from "react"
import MapButton from "./MapButton"


const LandingPage = ({ showMarkers, setBooleanMarker }) => {
  return (
    <div className="flex flex-1 justify-center items-center md:h-screen h-screen relative">
      <MapButton showMarkers={showMarkers} setBooleanMaerker={setBooleanMarker}></MapButton>
    </div>
  )
}

export default LandingPage
