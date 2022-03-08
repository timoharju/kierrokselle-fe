import React from "react"
import { Link } from "react-router-dom"

const MapButton = () => {
  return (
    <Link to="/map">
      <button component={Link} to="/map" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-full text-lg">
        <p className="">Etsi lähimmät radat</p>
      </button>
    </Link>
  )
}

export default MapButton