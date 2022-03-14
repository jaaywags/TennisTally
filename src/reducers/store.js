import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {spawn} from 'redux-saga/effects';
import gameReducer from './GameReducer';
import setReducer from './SetReducer';
import GameSaga from '../sagas/gameSagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield spawn(GameSaga);
}

const rootReducer = combineReducers({
  currentGame: gameReducer,
  sets: setReducer,
});

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
const store = configureStore({});
export default store;
