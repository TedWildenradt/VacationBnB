

const getSFLocation = () => ({
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 12
})

const getLALocation = () => ({
  center: { lat: 34.052836, lng: -118.246883 },
  zoom: 9
})

const getNYLocation = () => ({
  center: { lat: 40.783963, lng:  -73.968029 },
  zoom: 12
})

const standardOptions = () => ({
    center: { lat: 39.012435, lng: -101.434000 }, // this is USA
    zoom: 3
})


const getLocationDetails = (query) => {
  switch (query.toLowerCase()) {
    case 'san francisco':
      return getSFLocation();
    case 'los angeles':
      return getLALocation();
    case 'new york':
      return getNYLocation();
    default:
      return standardOptions();
  }
}

export default getLocationDetails;