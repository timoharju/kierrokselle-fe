import React from "react"
import reactDom from "react-dom"
import MapButton from "./MapButton"
import { useSelector } from "react-redux"

const MODAL_STYLE = {

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px",
  zIndex: 10

}

const OVERLAY_STYLE = {

  position: "fixed",
  top: "0",
  left: "0vh",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 10

}

const Modal = () => {

  const greyModalIsClosed = useSelector(state => state.greyModalIsClosed)

  return reactDom.createPortal(
    <>
      {greyModalIsClosed ? ( "" ) : (<><div style={OVERLAY_STYLE}></div><div style={MODAL_STYLE}>
        <MapButton></MapButton>
      </div></>) }
    </>,
    document.getElementById("portal")
  )
}

export default Modal