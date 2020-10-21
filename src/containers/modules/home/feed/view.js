import React from 'react';
import {View} from 'react-native';
import {GeoCard} from '../../../../components';

const FeedView = () => (
  <View style={{flexDirection: 'column'}}>
    <GeoCard title="Top Tracks" route={['HOME', {screen: 'TRACKS'}]} />
    <GeoCard title="Top Artists" route={['HOME', {screen: 'ARTISTS'}]} />
  </View>
);

export default FeedView;
