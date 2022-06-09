import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleCourseModal } from "../../actions"
import { toggleSidebar } from "../../actions/"

const ToggleableSidebar = () => {

  const dispatch = useDispatch()
  const courseModalIsClosed = useSelector(state => state.courseModalIsClosed)

  return (
    <div className="bg-gray-800 text-blue-100 w-56 space-y-6 px-2 z-50 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <p onClick={() => dispatch(toggleSidebar(true))} className="text-2xl font-extrabold">Kierrokselle</p>
      <nav>
        <li onClick={() => dispatch(toggleSidebar(true))} className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Kartta
        </li>
        <li onClick={() => {dispatch(toggleCourseModal(courseModalIsClosed)); dispatch(toggleSidebar(true))}} className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Radat
        </li>
        <li onClick={() => dispatch(toggleSidebar(true))} className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Tietoa
        </li>
        <li onClick={() => dispatch(toggleSidebar(true))} className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Ota yhteyttä
        </li>
      </nav>
      <footer className="absolute bottom-7 text-sm left-2 w-full">{process.env.NODE_ENV !== "production" ? <p>{process.env.NODE_ENV.toUpperCase()} ENVIRONMENT</p> : <></>}</footer>
      <footer className="absolute bottom-4 text-sm left-2 w-full">© 2022 Kierrokselle.com</footer>
    </div>
  )
}

export default ToggleableSidebar