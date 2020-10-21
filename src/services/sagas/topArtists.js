import {call, put, takeLatest, all} from 'redux-saga/effects';
import API from '../api';
import {ActionTypes} from '../actionTypes';

const api = API.create();

function* getTopArtists() {
  const response = yield call(api.getTopArtists);
  if (response.ok) {
    console.log('response: ', JSON.stringify(response.data));
  } else {
    console.warn('Failure');
  }
}

function* actionWatcher() {
  yield takeLatest(ActionTypes.GET_TOP_ARTISTS, getTopArtists);
}

export default function* topArtistsSaga() {
  yield all([actionWatcher()]);
}
