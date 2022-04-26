import Leaflet from "leaflet"

const basketIcon = new Leaflet.Icon({
  iconUrl: require("../icons/pixel_basket.png"),
  iconSize: [29, 39],
  iconAnchor: [17, 46],
  popupAnchor: [-3, -46],
  className: "basketIcon"
})

export default basketIcon