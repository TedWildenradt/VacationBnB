import * as HomeApiUtil from '../util/home_api_util';

export const RECEIVE_ALL_HOMES = "RECIEVE_ALL_HOMES";
export const RECEIVE_HOME = "RECIEVE_HOME";

export const fetchHomes = (filters) => dispatch =>(
  HomeApiUtil.fetchHomes(filters)
  .then( homes => dispatch(recieveHomes(homes)))
)

export const fetchHome = (id) => dispatch =>(
  HomeApiUtil.fetchHome(id)
  .then( home => dispatch(recieveHome(home)))
)

export const recieveHomes = (homes) => ({
  type: RECEIVE_ALL_HOMES,
  homes
})

export const recieveHome = (home) => ({
  type: RECEIVE_HOME,
  home
})

// How filters will get passed in: {bounds: {"southWest": {"lat": "37.74187", "lng": "-122.47791"}, "northEast": {"lat": "37.80971", "lng": "-122.39208"}}}