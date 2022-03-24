import {select, takeLatest} from 'redux-saga/effects';
import {sendMessage} from 'react-native-watch-connectivity';
import {UPDATE_WATCH_SCORE} from '../../actions/WatchActions';
import {RESET_EVERYTHING} from '../../actions/MatchActions';

function* update() {
  const {
    watch: {isAppleWatchReachable},
  } = yield select();
  if (isAppleWatchReachable) {
    const state = yield select();
    const infoForWatch = {
      homeTeamCurrentGame: state.currentGame.homeTeamFriendly,
      visitorTeamCurrentGame: state.currentGame.visitorTeamFriendly,
      homeTeamGames: state.games.homeTeam,
      visitorTeamGames: state.games.visitorTeam,
      homeTeamSets: state.sets.sets.filter(set => set.isHomeWinner).length,
      visitorTeamSets: state.sets.sets.filter(set => !set.isHomeWinner).length,
    };
    sendMessage(
      {text: JSON.stringify(infoForWatch)},
      resp => {
        console.log('response received', resp);
      },
      err => {
        console.log('Send message error', err);
      },
    );
  }
}

function* resetScore() {
  const {
    watch: {isAppleWatchReachable},
  } = yield select();
  if (isAppleWatchReachable) {
    const infoForWatch = {
      homeTeamCurrentGame: 'LOVE',
      visitorTeamCurrentGame: 'LOVE',
      homeTeamGames: 0,
      visitorTeamGames: 0,
      homeTeamSets: 0,
      visitorTeamSets: 0,
    };
    sendMessage(
      {text: JSON.stringify(infoForWatch)},
      resp => {
        console.log('response received', resp);
      },
      err => {
        console.log('Send message error', err);
      },
    );
  }
}

export default function* watchSaga() {
  yield takeLatest(UPDATE_WATCH_SCORE, update);
  yield takeLatest(RESET_EVERYTHING, resetScore);
}
