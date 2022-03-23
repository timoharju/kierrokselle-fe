import React from "react"
import { Route, Routes } from "react-router-dom"

import MapPage from "./components/MapPage"
import Nav from "./components/Nav"

const App = () => {

  return (
    <div className="bg-black h-screen flex-none   ">
      <div className="h-screen md:flex flex-1 ">
        <Nav></Nav>
        <Routes>
          <Route
            exact path="/" element={
              <MapPage/>
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
