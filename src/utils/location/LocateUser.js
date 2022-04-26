import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { addUserCoordinates, findUserLocationStatus } from "../../actions"
import { useDispatch, useSelector } from "react-redux"


const LocateUser = () => {

  const dispatch = useDispatch()
  const userIsLocated = useSelector(state => state.userIsLocated)
  const map = useMap()

  useEffect(() => {
    map.locate().on("locationfound", (event) =>  {
      if (userIsLocated === false) {
        map.flyTo(event.latlng, 12)
        dispatch(addUserCoordinates(event.latlng.lat, event.latlng.lng))
        console.log("user coordinates added")
        dispatch(findUserLocationStatus(userIsLocated))
      }
    })
  }, [])



  return null
}

export default LocateUser