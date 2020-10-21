import {call, put, takeLatest, all} from 'redux-saga/effects';
import API from '../api';
import {ActionTypes} from '../actionTypes';

const api = API.create();

function* getTopTracks() {
  const response = yield call(api.getTopTracks);
  if (response.ok) {
    console.log('response: ', JSON.stringify(response.data));
  } else {
    console.warn('Failure');
  }
}

function* actionWatcher() {
  yield takeLatest(ActionTypes.GET_TOP_TRACKS, getTopTracks);
}

export default function* topTracksSaga() {
  yield all([actionWatcher()]);
}
