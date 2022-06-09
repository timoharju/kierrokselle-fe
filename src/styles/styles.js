export const MODAL_STYLE = {
  container: isOver768px => ({
    position: "fixed",
    top: "50%",
    left: isOver768px ? "calc(50% + 7rem)" : "50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    zIndex: 10
  })
}

export const OVERLAY_STYLE = {
  position: "fixed",
  top: "0vh",
  left: "0vh",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 10
}

export const OVERLAY_STYLE_WO_BG = {
  position: "fixed",
  top: "0vh",
  left: "0vh",
  right: "0",
  bottom: "0",
  zIndex: 10
}

export default OVERLAY_STYLE