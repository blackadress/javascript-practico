let myMap = L.map('myMap').setView([0, 0], 2)

const urlOpenLayers = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
L.tileLayer(urlOpenLayers, {
  maxZoom: 15,
}).addTo(myMap)

const iconMarker = L.icon({
  iconUrl: 'marker.png',
  iconSize: [60, 60],
  iconAnchor: [30, 60]
})

let marker = null
const updateMap = () => {
  const urlISSGeoLocation = 'http://api.open-notify.org/iss-now.json'
  fetch(urlISSGeoLocation)
    .then(res => res.json())
    .then(data => {
      if (marker) {
        myMap.removeLayer(marker)
      }
      const {
        latitude,
        longitude
      } = data.iss_position
      console.log(latitude, longitude)
      marker = L.marker([latitude, longitude], {
        icon: iconMarker
      }).addTo(myMap)
    })

  setTimeout(updateMap, 3000)
}

updateMap()