import React from "react"

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"


const MapComponent = () => {
  return (
    <MapContainer className="relative md:h-screen min-h-[100vh] z-0 flex-1" zoomControl={false} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright"></ZoomControl>
      <Marker position={[51.505, -0.09]} style={{ height: "5vh", width:"5vh" }}>
        <Popup>
      Lontoon rata
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent