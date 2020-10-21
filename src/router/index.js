import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeRoutes from './home.routes';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HOME"
      component={HomeRoutes}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Router;
