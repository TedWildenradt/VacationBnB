import {fetchHomes} from '../actions/home_actions';

export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS"
// export const CHANGE_ONE_FILTER = "CHANGE_ONE_FILTER"


export const updateFilters = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilters(filter, value));
  return fetchHomes(getState().ui.filters)(dispatch);
}

export const changeFilters = (filter, value) => ({
  type: UPDATE_FILTERS,
  filter,
  value
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS
})

// export const changeOneFilter = (filter, value) => ({
//   type: CHANGE_ONE_FILTER,
//   filter,
//   value
// })



// this is what fetchHomes should be receiving to make it work:
// dispatch(fetchHomes({bounds: {"southWest": {"lat": "37.74187", "lng": "-122.47791"}, "northEast": {"lat": "37.80971", "lng": "-122.39208"}}}))