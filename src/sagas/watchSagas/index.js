import {select, takeLatest} from 'redux-saga/effects';
import {sendMessage} from 'react-native-watch-connectivity';
import {UPDATE_WATCH_SCORE} from '../../actions/WatchActions';
import {
  DECREMENT_HOME_TEAM_GAME,
  DECREMENT_VISITOR_TEAM_GAME,
} from '../../actions/GameActions';
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
  yield takeLatest(
    [UPDATE_WATCH_SCORE, DECREMENT_HOME_TEAM_GAME, DECREMENT_VISITOR_TEAM_GAME],
    update,
  );
  yield takeLatest(RESET_EVERYTHING, resetScore);
}
