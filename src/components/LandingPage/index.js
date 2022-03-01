import React from "react"
import MobileSidebar from "./MobileSidebar"
import Sidebar from "./DefaultSidebar"
import TranslatedSidebar from "./TranslatedSidebar"
import MapButton from "./MapButton"

const LandingPage = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="relative h-screen flex  ">
      {showSidebar ? ( <Sidebar></Sidebar>) : (
        <TranslatedSidebar showSidebar={showSidebar}></TranslatedSidebar>
      )}
      <div className="flex-1">
        <MobileSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}></MobileSidebar>
        <div className="flex flex-initial justify-center items-center h-5/6">
          <MapButton></MapButton>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
