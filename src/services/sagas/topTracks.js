import {call, put, takeLatest, all} from 'redux-saga/effects';
import API from '../api';
import Creator, {ActionTypes} from '../actionTypes';

const api = API.create();

function* getTopTracks() {
  const response = yield call(api.getTopTracks);
  if (response.ok) {
    yield put(Creator.getTopTracksSuccess(response.data));
  } else {
    yield put(
      Creator.getTopTracksFailure({
        error: {message: 'Data cannot be accessed'},
      }),
    );
  }
}

function* actionWatcher() {
  yield takeLatest(ActionTypes.GET_TOP_TRACKS, getTopTracks);
}

export default function* topTracksSaga() {
  yield all([actionWatcher()]);
}
