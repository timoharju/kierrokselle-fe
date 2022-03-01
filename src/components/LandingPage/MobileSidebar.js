import React from "react"

const MobileSidebar = ({ showSidebar, setShowSidebar }) => {

  return (
    <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden m-0 p-0">
      <a href="#" className="block p-4 text-white font-bold">Kierrokselle</a>
      <button  onClick={() => setShowSidebar(!showSidebar)} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )

}
export default MobileSidebar