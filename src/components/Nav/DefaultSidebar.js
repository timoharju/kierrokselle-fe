import React from "react"
import { Link } from "react-router-dom"


const DefaultSidebar = () => {

  return (
    <div className="bg-gray-800 text-white w-56 space-y-6 z-50 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex">
        <img className="h-12 flex-grow mb-2" src="pixel_basket_f_2.png"></img> <img className="w-1 h-1" src="pixil-frame-0.png"></img>
      </div>
      <Link to="/">
        <p className="text-4xl underline font-extrabold">Kierrokselle</p>
      </Link>
      <nav>
        <Link to="/map">
          <li className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Kartta
          </li>
        </Link>
        <Link to="/">
          <li className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Radat
          </li>
        </Link>
        <Link to="/">
          <li className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Tietoa
          </li>
        </Link>
        <Link to="/">
          <li className="block text-3xl py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:underline hover:text-white">
        Ota yhteyttä
          </li>
        </Link>
      </nav>
      <footer className="absolute bottom-7 text-sm left-2 w-full">{process.env.NODE_ENV !== "production" ? <p>{process.env.NODE_ENV.toUpperCase()} ENVIRONMENT</p> : <></>}</footer>
      <footer className="absolute bottom-4 text-sm left-2 w-full">© 2022 Kierrokselle.com</footer>
    </div>
  )
}

export default DefaultSidebar