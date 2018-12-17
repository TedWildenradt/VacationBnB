export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(homes) {
    console.log('time to update');
    const homesObj = {};
    homes.forEach(home => homesObj[home.id] = home);

    homes.filter(home => !this.markers[home.id])
    .forEach(newHome => this.createMarkerFromHome(newHome, this.handleClick))

    Object.keys(this.markers).filter(homeId => !homesObj[homeId])
    .forEach(homeId => this.removeMarker(this.markers[homeId]))
  }

  createMarkerFromHome(home) {
    const position = new google.maps.LatLng(home.lat, home.lng);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      homeId: home.id
    })
  }

  removeMarker(marker) {
    this.markers[marker.homeId].setMap(null);
    delete this.markers[marker.homeId]
  }

}