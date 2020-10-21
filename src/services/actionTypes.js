import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getTopArtists: null,
  getTopArtistsSuccess: ['res'],
  getTopArtistsFailure: ['error'],
  topArtistsDismissError: ['res'],

  getTopTracks: null,
  getTopTracksSuccess: ['res'],
  getTopTracksFailure: ['error'],
  topTracksDismissError: ['res'],
});

export const ActionTypes = Types;
export default Creators;
