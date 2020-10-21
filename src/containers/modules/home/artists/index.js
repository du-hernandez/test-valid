import React, {useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import Actions from '../../../../services/actionTypes';
import ArtistsView from './view';

const Artists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getTopArtists());
    return () => {};
  }, [dispatch]);

  const {topArtists, loading, error} = useSelector(
    (state) => state.topArtists,
    shallowEqual,
  );

  return <ArtistsView artists={topArtists?.artist ?? []} />;
};

export default Artists;
