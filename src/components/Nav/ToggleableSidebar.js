import React from "react"
import { Link } from "react-router-dom"

const ToggleableSidebar = () => {
  return (
    <div className="bg-gray-800 text-blue-100 w-56 space-y-6 px-2 z-50 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/">
        <p className="text-2xl font-extrabold">Kierrokselle</p>
      </Link>
      <nav>
        <Link to="/map">
          <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Kartta
          </li>
        </Link>
        <Link to="/">
          <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Radat
          </li>
        </Link>
        <Link to="/">
          <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Tietoa
          </li>
        </Link>
        <Link to="/">
          <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Ota yhteyttä
          </li>
        </Link>
      </nav>

    </div>
  )

}

export default ToggleableSidebar