import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../../actions/sidebarAction"

const MobileSidebar = () => {

  const dispatch = useDispatch()
  const isToggled = useSelector(state => state.isToggled)
  return (
    <div className="bg-gray-800 absolute text-gray-100 z-50 flex w-screen justify-between md:hidden">
      <Link to="/">
        <p className="block text-2xl p-4 text-white font-bold">Kierrokselle.com</p>
      </Link>
      <button onClick={() => dispatch(toggleSidebar(isToggled))} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
export default MobileSidebar