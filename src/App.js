import "./App.css"
import React, { useState } from "react"

import LandingPage from "./components/LandingPage"

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="bg-black h-screen flex-grow">
      <LandingPage showSidebar={showSidebar} setShowSidebar={setShowSidebar}></LandingPage>
    </div>

  )
}

export default App
