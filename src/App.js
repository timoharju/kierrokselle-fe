import "leaflet/dist/leaflet.css"

import React from "react"

import MapPage from "./components/MapPage"
import { Container } from "@material-ui/core"

const App = () => {

  return (
    <Container>
      <MapPage></MapPage>
    </Container>

  )
}

export default App
