import React from "react"
import reactDom from "react-dom"
import MapButton from "./MapButton"
import { useSelector } from "react-redux"
import { useMediaQuery } from "../../utils/mediaquery/useMediaQuery"
import { OVERLAY_STYLE, MODAL_STYLE } from "../../styles/styles"

const Modal = () => {

  const isOver768px = useMediaQuery("(min-width: 768px)")
  const mapButtonOverlayIsClosed = useSelector(state => state.mapButtonOverlayIsClosed)

  return reactDom.createPortal(
    <>
      {mapButtonOverlayIsClosed ? ( "" ) : (<><div style={OVERLAY_STYLE}></div><div style={MODAL_STYLE.container(isOver768px)} >
        <MapButton></MapButton>
      </div></>) }
    </>,
    document.getElementById("MapButtonOverlay")
  )
}

export default Modal