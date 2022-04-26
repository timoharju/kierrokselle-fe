import { useEffect } from "react"
import Locate from "leaflet.locatecontrol"
import { useMap } from "react-leaflet"

const LocateControl = ( { locatePosition }) => {

  const map = useMap()

  useEffect(() => {
    const lc = new Locate({ position: `${locatePosition}` })
    lc.addTo(map)
  }, [])
  return null
}

export default LocateControl