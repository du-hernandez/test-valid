import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../containers/modules/home/feed';

const Stack = createStackNavigator();

const ArtistsRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TOP_ARTISTS"
      component={Feed}
      options={{title: 'Top Artists'}}
    />
    <Stack.Screen
      name="ARTIST_DETAIL"
      component={Feed}
      options={{title: 'Artist Detail'}}
    />
  </Stack.Navigator>
);

export default ArtistsRoutes;
