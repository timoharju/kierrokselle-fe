import axios from "axios"

const baseUrl = "http://localhost:8080/api/v1"

const getMarkers = async () => {
  const response = await axios.get(`${baseUrl}/courses/`)
  return response.data
}

export default getMarkers