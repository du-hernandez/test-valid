import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getTopArtists: null,
  getTopArtistsSuccess: ['respuesta'],
  getTopArtistsFailure: ['error'],
  topArtistsDismissError: ['dismiss error'],

  getTopTracks: null,
  getTopTracksSuccess: ['respuesta'],
  getTopTracksFailure: ['error'],
  topTracksDismissError: ['dismiss error'],
});

export const ActionTypes = Types;
export default Creators;
