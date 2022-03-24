import {select, putResolve, takeLatest} from 'redux-saga/effects';
import {
  setHomeTeamScore,
  setVisitorTeamScore,
} from '../../actions/CurrentGameActions/CurrentGameActions';
import {
  CURRENT_GAME_INCREMENT_HOME,
  CURRENT_GAME_DECREMENT_HOME,
  CURRENT_GAME_INCREMENT_VISITOR,
  CURRENT_GAME_DECREMENT_VISITOR,
} from '../../actions/CurrentGameActions';
import {
  INCREMENT_HOME_TEAM_SET,
  INCREMENT_VISITOR_TEAM_SET,
} from '../../actions/SetActions';
import {
  INCREMENT_HOME_TEAM_GAME,
  INCREMENT_VISITOR_TEAM_GAME,
} from '../../actions/GameActions';
import {updateWatchScore} from '../../actions/WatchActions/WatchActions';

function* incrementHomeTeam({payload}) {
  console.log('test22');
  const updateWatch = payload?.updateWatch;
  const {
    currentGame: {homeTeamValue, visitorTeamValue},
  } = yield select();
  if (homeTeamValue === 0) {
    yield putResolve(
      setHomeTeamScore({
        score: 15,
        friendly: '15',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 15) {
    yield putResolve(
      setHomeTeamScore({
        score: 30,
        friendly: '30',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 30 && visitorTeamValue < 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: '40',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 30 && visitorTeamValue === 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 40 && visitorTeamValue < 40) {
    return;
  }

  if (homeTeamValue === 40 && visitorTeamValue === 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 41,
        friendly: 'ADD',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: '',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 40 && visitorTeamValue === 41) {
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }
}

function* incrementVisitorTeam({payload}) {
  const updateWatch = payload?.updateWatch;
  const {
    currentGame: {homeTeamValue, visitorTeamValue},
  } = yield select();

  if (visitorTeamValue === 0) {
    yield putResolve(
      setVisitorTeamScore({
        score: 15,
        friendly: '15',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 15) {
    yield putResolve(
      setVisitorTeamScore({
        score: 30,
        friendly: '30',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 30 && homeTeamValue < 40) {
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: '40',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 30 && homeTeamValue === 40) {
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 40 && homeTeamValue < 40) {
    return;
  }

  if (visitorTeamValue === 40 && homeTeamValue === 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: '',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 41,
        friendly: 'ADD',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 40 && homeTeamValue === 41) {
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }
}

function* decrementHomeTeam({payload}) {
  const updateWatch = payload?.updateWatch;
  const {
    currentGame: {homeTeamValue, visitorTeamValue},
  } = yield select();

  if (homeTeamValue === 0) {
    return;
  }

  if (homeTeamValue === 15) {
    yield putResolve(
      setHomeTeamScore({
        score: 0,
        friendly: 'LOVE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 30) {
    yield putResolve(
      setHomeTeamScore({
        score: 15,
        friendly: '15',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 40 && visitorTeamValue < 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 30,
        friendly: '30',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 40 && visitorTeamValue === 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 30,
        friendly: '30',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: '40',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (homeTeamValue === 41 && visitorTeamValue === 40) {
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
  }
}

function* decrementVisitorTeam({payload}) {
  const updateWatch = payload?.updateWatch;
  const {
    currentGame: {homeTeamValue, visitorTeamValue},
  } = yield select();

  if (visitorTeamValue === 0) {
    return;
  }

  if (visitorTeamValue === 15) {
    yield putResolve(
      setVisitorTeamScore({
        score: 0,
        friendly: 'LOVE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 30) {
    yield putResolve(
      setVisitorTeamScore({
        score: 15,
        friendly: '15',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 40 && homeTeamValue < 40) {
    yield putResolve(
      setVisitorTeamScore({
        score: 30,
        friendly: '30',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 40 && homeTeamValue === 40) {
    yield putResolve(
      setVisitorTeamScore({
        score: 30,
        friendly: '30',
      }),
    );
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: '40',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }

  if (visitorTeamValue === 41 && homeTeamValue === 40) {
    yield putResolve(
      setVisitorTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    yield putResolve(
      setHomeTeamScore({
        score: 40,
        friendly: 'DUCE',
      }),
    );
    if (updateWatch) {
      yield putResolve(updateWatchScore());
    }
    return;
  }
}

function* resetScore({payload}) {
  const updateWatch = payload?.updateWatch;
  yield putResolve(
    setVisitorTeamScore({
      score: 0,
      friendly: 'LOVE',
    }),
  );
  yield putResolve(
    setHomeTeamScore({
      score: 0,
      friendly: 'LOVE',
    }),
  );
  if (updateWatch) {
    yield putResolve(updateWatchScore());
  }
}

export default function* currentGameSaga() {
  yield takeLatest(CURRENT_GAME_INCREMENT_HOME, incrementHomeTeam);
  yield takeLatest(CURRENT_GAME_INCREMENT_VISITOR, incrementVisitorTeam);
  yield takeLatest(CURRENT_GAME_DECREMENT_HOME, decrementHomeTeam);
  yield takeLatest(CURRENT_GAME_DECREMENT_VISITOR, decrementVisitorTeam);
  yield takeLatest(
    [
      INCREMENT_HOME_TEAM_SET,
      INCREMENT_VISITOR_TEAM_SET,
      INCREMENT_HOME_TEAM_GAME,
      INCREMENT_VISITOR_TEAM_GAME,
    ],
    resetScore,
  );
}
