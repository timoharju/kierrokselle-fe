import React from "react"
import MobileSidebar from "./MobileSidebar"
import DefaultSidebar from "./DefaultSidebar"
import ToggleableSidebar from "./ToggleableSidebar"
import { useSelector } from "react-redux"


const Nav = () => {

  const isToggled = useSelector(state => state.isToggled)
  return (
    <>
      {isToggled ? ( <DefaultSidebar></DefaultSidebar>) : (
        <ToggleableSidebar></ToggleableSidebar>
      )}
      <MobileSidebar ></MobileSidebar>
    </>
  )
}

export default Nav
