

const getSFLocation = () => ({
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 12
})

const standardOptions = () => ({
    center: { lat: 39.012435, lng: -101.434000 }, // this is USA
    zoom: 3
})


const getLocationDetails = (query) => {
  switch (query) {
    case 'san francisco':
      return getSFLocation();

    default:
      return standardOptions();
  }
}

export default getLocationDetails;