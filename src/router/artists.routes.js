import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../containers/modules/home/feed';
import Artists from '../containers/modules/home/artists';

const Stack = createStackNavigator();

const ArtistsRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TOP_ARTISTS"
      component={Artists}
      options={{title: 'TOP ARTISTS'}}
    />
    <Stack.Screen
      name="ARTIST_DETAIL"
      component={Feed}
      options={{title: 'ARTIST DETAIL'}}
    />
  </Stack.Navigator>
);

export default ArtistsRoutes;
