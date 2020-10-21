import React from 'react';
import {View} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import Feed from './containers/modules/home/feed';

const App = () => (
  <ReduxProvider store={store}>
    <Feed />
  </ReduxProvider>
);

export default App;
