import Inmutable from 'seamless-immutable';
import {createReducer} from 'reduxsauce';
import {ActionTypes} from '../actionTypes';

const INITIAL_STATE = Inmutable({
  topTracks: [],
  loading: false,
  error: null,
});

export const getTopTracks = (state) => state.merge({loading: true});

export const getTopTracksSuccess = (state, action) => {
  return state.merge({loading: false, topTracks: action.res.tracks});
};

export const getTopTracksFailure = (state, action) => {
  return state.merge({loading: false, error: action.error});
};

export const topTracksDismissError = (state) => state.merge({error: null});

export const reducer = createReducer(INITIAL_STATE, {
  [ActionTypes.GET_TOP_TRACKS]: getTopTracks,
  [ActionTypes.GET_TOP_TRACKS_SUCCESS]: getTopTracksSuccess,
  [ActionTypes.GET_TOP_TRACKS_FAILURE]: getTopTracksFailure,
  [ActionTypes.TOP_TRACKS_DISMISS_ERROR]: topTracksDismissError,
});
