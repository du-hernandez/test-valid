import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import Actions from '../../../../services/actionTypes';
import FeedView from './view';

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getTopTracks());
    return () => {};
  }, [dispatch]);

  const topArtists = useSelector((state) => state.topArtists, shallowEqual);
  // console.warn('lkajsdfñakjsdf: ', topArtists);
  return <FeedView />;
};

export default Feed;
