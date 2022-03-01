import React from "react"

const TranslatedSidebar = ( showSidebar ) => {
  return (
    <div className={`bg-gray-800 text-blue-100 w-56 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out
        ${showSidebar ? "" : "-translate-x-1 "}`}>
      <a href="#" className="text-white flex items-center space-x-2">
        <span className="text-2xl font-extrabold">Kierrokselle</span>
      </a>
      <nav>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Kartta
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Radat
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Tietoa
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Ota yhteyttä
        </a>
      </nav>
    </div>
  )

}

export default TranslatedSidebar