import React from "react"
import MobileSidebar from "./MobileSidebar"
import DefaultSidebar from "./DefaultSidebar"
import ToggleableSidebar from "./ToggleableSidebar"
import { useSelector } from "react-redux"


const Nav = () => {

  const sidebarIsToggled = useSelector(state => state. sidebarIsToggled)

  return (
    <>
      { sidebarIsToggled ? (  <ToggleableSidebar></ToggleableSidebar> ) : (
        <DefaultSidebar></DefaultSidebar>
      )}
      <MobileSidebar ></MobileSidebar>
    </>
  )
}

export default Nav
