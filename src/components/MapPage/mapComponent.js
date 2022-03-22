import React, { useEffect, useState } from "react"
import getMarkers from "../../services/mapService"

import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMapEvents } from "react-leaflet"

const MapComponent = () => {

  const [markers, setMarkers] = useState([])

  const defaultCenter = [64, 25]
  const defaultZoom = [6]

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


  const LocationMarker = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
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
      <LocationMarker></LocationMarker>
      <ZoomControl position="bottomright"></ZoomControl>
    </MapContainer>
  )
}

export default MapComponent