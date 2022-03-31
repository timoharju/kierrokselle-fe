import { useEffect } from "react"
import { useMap } from "react-leaflet"


const LocateUser = () => {

  const map = useMap()

  useEffect(() => {
    map.locate().on("locationfound", (e) =>  {
      map.flyTo(e.latlng, map.getZoom())
    })
  }, [map])

  return null
}

export default LocateUser