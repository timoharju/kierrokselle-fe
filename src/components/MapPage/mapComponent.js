import React, { useEffect, useState } from "react"
import getCourses from "../../services/mapService"
import LocateUser from "../../utils/location/LocateUser.js"
import GreyModal from "./GreyModal"
import { useSelector } from "react-redux"
import basketIcon from "../../icons/basketIcon"
import LocateControl from "../../utils/location/LocateControl"

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"


const MapComponent = () => {

  const [courses, setCourses] = useState([])
  const userLocationCoordinates = useSelector(state => state.userLocationCoordinates)
  const greyModalIsClosed = useSelector(state => state.greyModalIsClosed)
  const userIsLocated = useSelector(state => state.userIsLocated)

  const defaultCenter = userIsLocated ? [userLocationCoordinates[0].lat, userLocationCoordinates[0].lng] : [64, 25]
  const defaultZoom = 12

  useEffect(() => {
    const courseList = getCourses()
      .then((courseName) => {
        return courseName
      })

    const updateCoursesList = async () => {
      const courseListFromDB = await courseList
      setCourses([...courses, ...courseListFromDB])
    }
    updateCoursesList()
  },[])

  return (
    <>
      <GreyModal></GreyModal>
      <MapContainer className="relative md:h-screen min-h-[100vh] z-0 flex-1" zoomControl={false} center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {courses.length > 0 && courses.map((course) =>
          <Marker key={course.id}
            position={[
              course.lon,
              course.lat
            ]}
            icon={basketIcon}
          >
            <Popup>{course.courseName} <br></br>
              <a className="text-size">Väyliä: </a> {course.holeCount} <br></br>
              <a className="text-size">Haastavuus: </a> {course.courseDifficulty}
            </Popup>
          </Marker>
        )}
        {greyModalIsClosed ? (<LocateUser></LocateUser>) : ("")}
        <ZoomControl position="bottomright"></ZoomControl>
        <LocateControl locatePosition="bottomright"></LocateControl>
      </MapContainer>
    </>
  )
}

export default MapComponent