import {combineReducers} from 'redux';

export default combineReducers({
  topTracks: require('./topTracks').reducer,
  topArtists: require('./topArtists').reducer,
});
