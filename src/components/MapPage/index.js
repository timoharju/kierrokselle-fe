import React from "react"
import MapComponent from "./mapComponent"

const MapPage = ({ showMarkers, setBooleanMarker }) => {

  return (
    <MapComponent showMarkers={showMarkers} setBooleanMaerker={setBooleanMarker}></MapComponent>
  )
}


export default MapPage
