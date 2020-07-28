import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

//const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger)),
);

//sagaMiddleware.run(rootSaga);

export default store;