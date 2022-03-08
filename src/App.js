import "./App.css"
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import MapPage from "./components/MapPage"
import Nav from "./components/Nav"

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="bg-black h-screen flex-none   ">
      <div className="h-screen md:flex flex-1 ">
        <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar}></Nav>
        <Routes>
          <Route
            exact path="/" element={
              <LandingPage showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            }/>
          <Route
            path="/map" element={
              <MapPage/>
            }/>
        </Routes>
      </div>
    </div>
  )
}

export default App
