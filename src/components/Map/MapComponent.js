import React, { useEffect, useState } from "react"
import { getCourses } from "../../services/mapService"
import LocateUser from "../../utils/location/LocateUser.js"
import MapButtonOverlay from "./MapButtonOverlay"
import { useDispatch, useSelector } from "react-redux"
import basketIcon from "../../icons/basketIcon"
import LocateControl from "../../utils/location/LocateControl"
import CoursesTable from "../Courses/CoursesTable"
import InfoModal from "../Courses/InfoModal"
import { toggleCourseInfoModal } from "../../actions"
import { saveCourseId } from "../../utils/store/courseIdSessionStorage"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"

const MapComponent = () => {

  const [courses, setCourses] = useState([])
  const userLocationCoordinates = useSelector(state => state.userLocationCoordinates)
  const mapButtonOverlayIsClosed = useSelector(state => state.mapButtonOverlayIsClosed)
  const userIsLocated = useSelector(state => state.userIsLocated)
  const courseInfoModalIsClosed = useSelector(state => state.courseInfoModalIsClosed)

  const dispatch = useDispatch()

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
      <InfoModal></InfoModal>
      <CoursesTable></CoursesTable>
      <MapButtonOverlay></MapButtonOverlay>
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
            <Popup>
              <div className="flex">
                <button onClick={() => {dispatch(toggleCourseInfoModal(courseInfoModalIsClosed)); saveCourseId(course.id)}}><a className="text-xl mb-6 duration-200 hover:underline">{course.courseName}</a></button>
              </div>
              <div className="flex space-x-1 pt-4">
                <div className="font-bold">Väyliä: </div><div>{course.holeCount}</div>
              </div>
              <div className="flex space-x-1 pt-1">
                <div className="font-bold">Haastavuus: </div><div>{course.courseDifficulty}</div>
              </div>
              <div className="flex space-x-1 pt-1">
                <div className="font-bold">Paikkakunta: </div><div>{course.city}</div>
              </div>
              <div className="flex space-x-1 pt-1">
                <div className="font-bold">Tähdet: </div><div>{course.rating} / 5</div> <img className="h-4 w-4 relative -top-[1px] inline-block" src="pixel_star.png"></img>
              </div>
              <div className="flex space-x-1 text-lg py-3">
                Ajo-ohjeet
                <a href={`https://www.google.com/maps/place/${course.lon},${course.lat}`}>
                  <img className="h-7 w-7 relative left-2 -top-1 inline-block" tag="Ajo-ohjeet" src="Google_Maps_icon.png"></img>
                </a>
              </div>
            </Popup>
          </Marker>
        )}
        {mapButtonOverlayIsClosed ? (<LocateUser></LocateUser>) : ("")}
        <ZoomControl position="bottomright"></ZoomControl>
        <LocateControl locatePosition="bottomright"></LocateControl>
      </MapContainer>
    </>
  )
}

export default MapComponent