import React from "react"
import MobileSidebar from "./MobileSidebar"
import DefaultSidebar from "./DefaultSidebar"
import TranslatedSidebar from "./TranslatedSidebar"


const Nav = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      {showSidebar ? ( <DefaultSidebar></DefaultSidebar>) : (
        <TranslatedSidebar showSidebar={showSidebar}></TranslatedSidebar>
      )}
      <MobileSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}></MobileSidebar>
    </>
  )
}

export default Nav
