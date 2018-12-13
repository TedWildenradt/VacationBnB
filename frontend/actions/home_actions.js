import * as HomeApiUtil from '../util/home_api_util';

export const RECEIVE_ALL_HOMES = "RECIEVE_ALL_HOMES";
export const RECEIVE_HOME = "RECIEVE_HOME";

export const fetchHomes = () => dispatch =>(
  HomeApiUtil.fetchHomes()
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