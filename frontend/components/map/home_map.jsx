import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  // center: { lat: 37.7758, lng: -122.435 }, // this is SF
  center: { lat: 39.012435, lng: -101.434000 }, // this is USA
  // zoom: 12 //This is SF
  zoom: 3
};
class HomeMap extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // set the map to show SF

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);
    // debugger
    this.regularListener();
    //marker manager
  }

  regularListener() {
    google.maps.event.addListener(this.map, 'idle', () => {
      
      const{north, south, east, west} = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, lng: east},
        southWest: {lat: south, lng: west}
      }
      this.props.updateFilters('bounds', bounds);
    })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  render() {

    return(
      <div id="map-container" ref={ map => this.mapNode = map }>

      </div>
    )
  }
}

export default HomeMap;