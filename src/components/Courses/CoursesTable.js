/* eslint-disable react/jsx-key */
import React from "react"
import reactDom from "react-dom"
import { useEffect, useState, useMemo } from "react"
import { useTable, useGlobalFilter, usePagination, useSortBy } from "react-table"
import { getCourses } from "../../services/mapService"
import GlobalFilter from "../../utils/reactTable/filterComponents/GlobalFilter"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { AiOutlineClose } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux"
import { toggleCourseModal, toggleCourseInfoModal } from "../../actions"
import CourseInfo from "./CourseInfo"
import { saveCourseId } from "../../utils/store/courseIdSessionStorage"
import { OVERLAY_STYLE } from "../../styles/styles"

const CoursesPage = () => {

  const [courses, setCourses] = useState([])

  const dispatch = useDispatch()
  const courseModalIsClosed = useSelector(state => state.courseModalIsClosed)
  const courseInfoModalIsClosed = useSelector(state => state.courseInfoModalIsClosed)

  useEffect(() => {
    const courseList = getCourses()
      .then((data) => {
        return data
      })

    const updateCoursesState = async () => {
      const courseListFromDB = await courseList
      setCourses([...courses, ...courseListFromDB])
    }
    updateCoursesState()
  },[])

  const columns = useMemo(
    () => [
      {
        Header: "Rata",
        accessor: "courseName",
        Cell: (data) => {
          return (
            <div>
              <button onClick={() => {dispatch(toggleCourseInfoModal(courseInfoModalIsClosed)); saveCourseId(data.row.original.id)}}>{data.value}</button>
            </div>
          )
        }
      },
      {
        Header: "Paikkakunta",
        accessor: "city"
      },
      {
        Header: "Väylät",
        accessor: "holeCount"
      },
      {
        Header: "Haastavuus",
        accessor: "courseDifficulty"
      },
      {
        Header:
          <img className="inline-block ml-auto mr-auto"
            src={"pixel_star.png"}
            alt='pixelstar'
          />,
        accessor: "rating",
      },
    ],
    [courseInfoModalIsClosed]
  )
  const tableInstance = useTable({ columns, data: courses }, useGlobalFilter, useSortBy, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions
  } = tableInstance

  const { globalFilter, pageIndex } = state

  return reactDom.createPortal (
    <>
      {courseInfoModalIsClosed ? ("") :
        <CourseInfo></CourseInfo>}
      {courseModalIsClosed ? ("")  :
        <div style={OVERLAY_STYLE}>
          <button className="absolute top-32 md:right-12 right-2 text-white" onClick={() => dispatch(toggleCourseModal(courseModalIsClosed))}>
            <AiOutlineClose className="h-10 w-10 hover:bg-gray-400 text-white"></AiOutlineClose>
          </button>
          <div className="flex-grow h-[100%] overflow-x-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
            <div className="flex-row mt-1 relative top-36 md:left-[17rem] w-1/3 ">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
            </div>
            <table className="md:w-[calc(100%_-_20rem)] md:left-[17rem] md:px-54 w-screen relative top-36 text-white text-xl" {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr className="bg-slate-700" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th className="border-solid border-2" {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header")}
                        <span className="relative left-2 top-1 inline-block">
                          {column.isSorted ? (column.isSortedDesc ? <TiArrowSortedDown className="float-right"/> : <TiArrowSortedUp className="float-right" />) : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row)
                  return (
                    <tr className="bg-cyan bg-slate-600" {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td className="border-solid text-center border-2 border-white" {...cell.getCellProps()}>
                            { cell.render("Cell")}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="relative md:left-[17rem] top-36 flex-col items-center w-3/6">
              <span className="text-sm text-white">
            Sivu{" "}
                <span className="font-semibold text-white">
                  {pageIndex +1} / {pageOptions.length}
                </span> {" "}
              </span>
              <div className="inline-flex mt-2 xs:mt-0 space-x-2">
                <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800  hover:bg-gray-900 rounded-xl
            dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => previousPage()} disabled={!canPreviousPage}>Edellinen</button>
                <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800  hover:bg-gray-900 rounded-xl
            dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " onClick={() => nextPage()} disabled={!canNextPage}>Seuraava</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>,
    document.getElementById("courseTable")
  )
}

export default CoursesPage