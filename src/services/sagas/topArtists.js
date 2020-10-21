import {call, put, takeLatest, all} from 'redux-saga/effects';
import API from '../api';
import Creator, {ActionTypes} from '../actionTypes';

const api = API.create();

function* getTopArtists() {
  const response = yield call(api.getTopArtists);
  if (response.ok) {
    yield put(Creator.getTopArtistsSuccess(response.data));
  } else {
    yield put(
      Creator.getTopArtistsFailure({
        error: {message: 'Data cannot be accessed'},
      }),
    );
  }
}

function* actionWatcher() {
  yield takeLatest(ActionTypes.GET_TOP_ARTISTS, getTopArtists);
}

export default function* topArtistsSaga() {
  yield all([actionWatcher()]);
}
