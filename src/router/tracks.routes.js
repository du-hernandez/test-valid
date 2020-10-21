import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../containers/modules/home/feed';

const Stack = createStackNavigator();

const TracksRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TOP_TRACKS"
      component={Feed}
      options={{title: 'TOP TRACKS'}}
    />
    <Stack.Screen
      name="TRACK_DETAIL"
      component={Feed}
      options={{title: 'TRACK DETAIL'}}
    />
  </Stack.Navigator>
);

export default TracksRoutes;
