/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import reactDom from "react-dom"
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineClose } from "react-icons/ai"
import { toggleCourseInfoModal } from "../../actions"
import { getCourseById } from "../../services/mapService"
import { loadCourseId } from "../../utils/store/courseIdSessionStorage"
import { OVERLAY_STYLE } from "../../styles/styles"

const CourseInfo = () => {

  const [currentCourse, setCurrentCourse] = useState("")

  const dispatch = useDispatch()
  const courseInfoModalIsClosed = useSelector(state => state.courseInfoModalIsClosed)

  useEffect(() => {
    if (courseInfoModalIsClosed===false) {
      const course = getCourseById(loadCourseId())
        .then((data) => {
          return data
        })
      const updateCurrentCourseState = async () => {
        const courseFromDB = await course
        setCurrentCourse(courseFromDB)
      }
      updateCurrentCourseState()
    }
  },[])

  return reactDom.createPortal (
    <>
      <div style={OVERLAY_STYLE}>
        <button className="absolute md:top-[24px] top-[86px] md:right-12 right-2 text-white" onClick={() => dispatch(toggleCourseInfoModal(courseInfoModalIsClosed))}>
          <AiOutlineClose className="h-10 w-10 hover:bg-gray-400 text-white"></AiOutlineClose>
        </button>
        <div className="md:w-[calc(100%_-_20rem)] md:left-[17rem] md:top-20 flex-grow absolute top-[134px] max-h-screen bottom-20 border-solid border-white border-[1px] w-screen bg-black">
          <div className="flex flex-row h-1/2">
            <div className="bg-slate-600 w-1/2">
              <p className="text-white text-2xl md:text-4xl px-2 opacity-100 underline w-1/2 py-1">{currentCourse.courseName} </p>
              <p className="text-white text-xl md:text-2xl px-2 opacity-100 py-0">Kuvaus:</p>
              <div className="bg-slate-700 border-4 border-slate-600 h-[calc(100%_-_4rem)] md:h-[calc(100%_-_5rem)] scrollbar-thin scrollbar-thumb-white scrollbar-track-slate-600 ">
                <p className="text-white text-xl md:text-2xl px-2 opacity-100 py-2">&quot;Lorem ipsum dolor sit amet, ut brute sonet deterruisset vix, mei id aeque aliquip. Nulla discere mnesarchum ea sed, no dictas deseruisse reprimique eum. Ne tamquam labitur epicuri vix, et nibh probo democritum usu. Denique fastidii insolens cu eum.&quot;<br></br><br></br></p>
              </div>
            </div>
            <div className=" bg-slate-700 border-slate-600 w-1/2">
              <div className="bg-slate-600 flex-grow">
                <p className="text-white text-xl px-2 md:text-2xl opacity-100 md:py-[24px] py-[18px] text-ellipsis text-right">Tähdet:  {currentCourse.rating} / 5 <img className="inline-block relative bottom-[3px] " src={"pixel_star.png"} alt='pixelstar'/></p>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-1/2">
            <div className="bg-slate-600 w-1/2 ">
              <div className="relative top-[10%] md:top-[13%] h-[90%] md:h-[87%] md:w-[100%] overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-slate-600">
                <table className="w-[100%] h-[100%]">
                  <tr>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                   Rata:
                    </td>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                      {currentCourse.courseName}
                    </td>
                  </tr>
                  <tr className="border-2 border-solid border-white">
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                    Paikkakunta:
                    </td>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                      {currentCourse.city}
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                    Osoite:
                    </td>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                      {currentCourse.address}
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                  Väylien määrä:
                    </td>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                      {currentCourse.holeCount}
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                    Haastavuus:
                    </td>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                      {currentCourse.courseDifficulty}
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                    placeholder
                    </td>
                    <td className="md:px-3 border-2 border-solid border-white bg-slate-700 text-white">
                    placeholder
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className=" bg-slate-600 w-1/2 flex flex-col">
              <p className=" text-white md:py-2 px-2 text-xl md:text-2xl">Kommentit: </p>
              <div className="bg-slate-700 h-[100%] scrollbar-thin scrollbar-thumb-white scrollbar-track-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("courseInfo")
  )
}


export default CourseInfo