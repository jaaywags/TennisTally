import {select, putResolve, takeLatest} from 'redux-saga/effects';
import {
  INCREMENT_HOME_TEAM_SET,
  INCREMENT_VISITOR_TEAM_SET,
} from '../../actions/SetActions';
import {completeSet} from '../../actions/SetActions/SetActions';
import {resetGames} from '../../actions/GameActions/GameActions';

function* incrementSet({payload}) {
  const {isHomeWinner} = payload;
  const {
    games: {homeTeam, visitorTeam},
  } = yield select();
  yield putResolve(
    completeSet({
      home: homeTeam,
      visitor: visitorTeam,
      isHomeWinner,
    }),
  );
  yield putResolve(resetGames());
}

export default function* setSaga() {
  yield takeLatest(INCREMENT_HOME_TEAM_SET, incrementSet);
  yield takeLatest(INCREMENT_VISITOR_TEAM_SET, incrementSet);
}
