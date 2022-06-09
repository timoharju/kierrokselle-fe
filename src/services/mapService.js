import axios from "axios"

const baseUrl = "http://localhost:8080/api/v1"

export const getCourses = async () => {
  const response = await axios.get(`${baseUrl}/courses/`)
  return response.data
}

export const getCourseById = async (id) => {
  const response = await axios.get(`${baseUrl}/courses/${id}`)
  return response.data
}
