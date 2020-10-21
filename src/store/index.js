import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';

import rootSaga from '../services/sagas';
import rootReducer from '../services/reducers';

const middleware = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

// const middlewar = [sagaMiddleware];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);
