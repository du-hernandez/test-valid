import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../containers/modules/home/feed';
import ArtistsRoutes from './artists.routes';
import TracksRoutes from './tracks.routes';

const Stack = createStackNavigator();

const FeedRoutes = () => (
  <Stack.Navigator initialRouteName="FEED">
    <Stack.Screen
      name="FEED"
      component={Feed}
      options={{
        title: 'Inicio',
      }}
    />
    <Stack.Screen
      name="ARTISTS"
      component={ArtistsRoutes}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TRACKS"
      component={TracksRoutes}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default FeedRoutes;
