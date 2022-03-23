import React, { useEffect, useState } from "react"
import getMarkers from "../../services/mapService"
import LocateUser from "../../utils/LocateUser.js"
import Modal from "./Modal"

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"


const MapComponent = () => {

  const [markers, setMarkers] = useState([])

  const defaultCenter = [64, 25]
  const defaultZoom = [10]

  useEffect(() => {
    const marker = getMarkers()
      .then((courseName) => {
        return courseName
      })

    const printMarker = async () => {
      const a = await marker
      setMarkers([...markers, ...a])
    }
    printMarker()
  },[])



  return (
    <>
      <Modal></Modal>
      <MapContainer className="relative md:h-screen min-h-[100vh] z-0 flex-1" zoomControl={false} center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.length > 0 && markers.map((marker) =>
          <Marker key={marker.id}
            position={[
              marker.lon,
              marker.lat
            ]}
          >
            <Popup>{marker.courseName}</Popup>
          </Marker>
        )}
        <LocateUser></LocateUser>
        <ZoomControl position="bottomright"></ZoomControl>
      </MapContainer>
    </>
  )
}

export default MapComponent