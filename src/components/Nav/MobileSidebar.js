import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../../actions/"

const MobileSidebar = () => {

  const dispatch = useDispatch()
  const sidebarIsToggled = useSelector(state => state.sidebarIsToggled)
  return (
    <div className="bg-gray-800 fixed text-gray-100 z-50 flex w-screen justify-between md:hidden">
      <p className="block text-2xl p-4 text-white font-bold">Kierrokselle.com</p>
      <button onClick={() => dispatch(toggleSidebar(sidebarIsToggled))} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
export default MobileSidebar