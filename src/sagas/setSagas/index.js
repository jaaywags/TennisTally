import {select, putResolve, takeLatest} from 'redux-saga/effects';
import {
  INCREMENT_HOME_TEAM_SET,
  INCREMENT_VISITOR_TEAM_SET,
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM,
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM,
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
} from '../../actions/SetActions';
import {
  completeSet,
  increaseSpecificSetForHomeTeamComplete,
  decreaseSpecificSetForHomeTeamComplete,
  increaseSpecificSetForVisitorTeamComplete,
  decreaseSpecificSetForVisitorTeamComplete,
} from '../../actions/SetActions/SetActions';
import {resetGames} from '../../actions/GameActions/GameActions';
import {updateWatchScore} from '../../actions/WatchActions/WatchActions';

function* incrementSet({payload}) {
  const {isHomeWinner} = payload;
  const updateWatch = payload?.updateWatch;
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
  if (updateWatch) {
    yield putResolve(updateWatchScore());
  }
}

function* increaseSetForHome({payload}) {
  const {index} = payload;
  yield putResolve(increaseSpecificSetForHomeTeamComplete({index}));
  yield putResolve(updateWatchScore());
}

function* decreaseSetForHome({payload}) {
  const {index} = payload;
  yield putResolve(decreaseSpecificSetForHomeTeamComplete({index}));
  yield putResolve(updateWatchScore());
}

function* increaseSetForVisitor({payload}) {
  const {index} = payload;
  yield putResolve(increaseSpecificSetForVisitorTeamComplete({index}));
  yield putResolve(updateWatchScore());
}

function* decreaseSetForVisitor({payload}) {
  const {index} = payload;
  yield putResolve(decreaseSpecificSetForVisitorTeamComplete({index}));
  yield putResolve(updateWatchScore());
}

export default function* setSaga() {
  yield takeLatest(INCREMENT_HOME_TEAM_SET, incrementSet);
  yield takeLatest(INCREMENT_VISITOR_TEAM_SET, incrementSet);
  yield takeLatest(INCREASE_SPECIFIC_SET_FOR_HOME_TEAM, increaseSetForHome);
  yield takeLatest(DECREASE_SPECIFIC_SET_FOR_HOME_TEAM, decreaseSetForHome);
  yield takeLatest(
    INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
    increaseSetForVisitor,
  );
  yield takeLatest(
    DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
    decreaseSetForVisitor,
  );
}
