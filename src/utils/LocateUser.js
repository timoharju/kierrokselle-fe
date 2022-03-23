import { useEffect } from "react"
import { useMap } from "react-leaflet"
import L from "leaflet"


const LocateUser = () => {

  const map = useMap()

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom())
      const radius = e.accuracy
      const circle = L.circle(e.latlng, radius)
      circle.addTo(map)
    })
  }, [map])

  return null
}

export default LocateUser