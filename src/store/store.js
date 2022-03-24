import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {spawn} from 'redux-saga/effects';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentGameReducer from '../reducers/CurrentGameReducer';
import gameReducer from '../reducers/GameReducer';
import setReducer from '../reducers/SetReducer';
import watchReducer from '../reducers/WatchReducer';
import CurrentGameSaga from '../sagas/currentGameSagas';
import SetSaga from '../sagas/setSagas';
import WatchSaga from '../sagas/watchSagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield spawn(CurrentGameSaga);
  yield spawn(SetSaga);
  yield spawn(WatchSaga);
}

const rootReducer = combineReducers({
  currentGame: currentGameReducer,
  games: gameReducer,
  sets: setReducer,
  watch: watchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
