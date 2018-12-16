import {fetchHomes} from '../actions/home_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";


export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchHomes(getState().ui.filters)(dispatch);
}

export const changeBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
})

// this is what fetchHomes should be receiving to make it work:
// dispatch(fetchHomes({bounds: {"southWest": {"lat": "37.74187", "lng": "-122.47791"}, "northEast": {"lat": "37.80971", "lng": "-122.39208"}}}))