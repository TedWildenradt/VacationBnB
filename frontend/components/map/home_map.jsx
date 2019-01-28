import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import getLocationDetails from '../../util/map_util';


class HomeMap extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {                                                                         
    // Centers the map based on the search query
    const mapOptions = getLocationDetails(this.props.query)

    // Creates the map object
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // Creates the markers to be placed on the map
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);

    // Listens for the user moving the map and adjusting the search results to only the homes in the map window
    this.regularListener();
  }
  
  // Listens for changes to the map window
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

  componentDidUpdate(prevProps) {

    if (prevProps.query !== this.props.query){
      const mapOptions = getLocationDetails(this.props.query)
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.regularListener()
    }
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