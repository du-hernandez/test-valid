import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store';
import Router from './router';

const App = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  </NavigationContainer>
);

export default App;
