import {all, fork} from 'redux-saga/effects';
import topArtistsSaga from './topArtists';
import topTracksSaga from './topTracks';

export default function* rootSaga() {
  yield all([fork(topArtistsSaga), fork(topTracksSaga)]);
}
