export const loadCourseId = () => {
  try {
    const serializedCourseId = sessionStorage.getItem("ClickedCourseId")
    if (serializedCourseId === null) {
      return undefined
    }
    return JSON.parse(serializedCourseId)
  } catch (error) {
    return undefined
  }
}

export const saveCourseId = (courseId) => {
  try {
    const serializedCourseId = JSON.stringify(courseId)
    sessionStorage.setItem("ClickedCourseId", serializedCourseId)
  } catch (error) {
    console.log(error)
  }
}
