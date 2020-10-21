import apisauce from 'apisauce';
import {API_KEY} from '../constants';

const create = (baseURL = 'https://ws.audioscrobbler.com/2.0') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
  });

  const defaultvariables = {
    //?method=geo.gettoptracks&country=spain&api_key=${API_KEY}&format=json
    method: 'geo.gettoptracks',
    country: 'spain',
    api_key: API_KEY,
    format: 'json',
  };

  const getTopTracks = () =>
    api.get('/', {
      ...defaultvariables,
      method: 'geo.gettoptracks',
    });

  const getTopArtists = () =>
    api.get('/', {
      ...defaultvariables,
      method: 'geo.gettopartists',
    });

  return {
    getTopTracks,
    getTopArtists,
  };
};

export default {
  create,
};
