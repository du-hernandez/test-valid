import Inmutable from 'seamless-immutable';
import {createReducer} from 'reduxsauce';
import {ActionTypes} from '../actionTypes';

const INITIAL_STATE = Inmutable({
  topArtists: [],
  loading: false,
  error: null,
});

export const getTopArtists = (state) => state.merge({loading: true});

export const getTopArtistsSuccess = (state, action) => {
  // const {payload} = action;
  return state.merge({loading: false, topArtists: action.res.topartists});
};

export const getTopArtistsFailure = (state, action) => {
  return state.merge({loading: false, error: action.error});
};

export const topArtistsDismissError = (state) => state.merge({error: null});

export const reducer = createReducer(INITIAL_STATE, {
  [ActionTypes.GET_TOP_ARTISTS]: getTopArtists,
  [ActionTypes.GET_TOP_ARTISTS_SUCCESS]: getTopArtistsSuccess,
  [ActionTypes.GET_TOP_ARTISTS_FAILURE]: getTopArtistsFailure,
  [ActionTypes.TOP_ARTISTS_DISMISS_ERROR]: topArtistsDismissError,
});
