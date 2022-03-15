import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {spawn} from 'redux-saga/effects';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentGameReducer from '../reducers/CurrentGameReducer';
import gameReducer from '../reducers/GameReducer';
import setReducer from '../reducers/SetReducer';
import CurrentGameSaga from '../sagas/currentGameSagas';
import SetSaga from '../sagas/setSagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield spawn(CurrentGameSaga);
  yield spawn(SetSaga);
}

const rootReducer = combineReducers({
  currentGame: currentGameReducer,
  games: gameReducer,
  sets: setReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
