import {createAction} from 'redux-actions';
import {
  CURRENT_GAME_INCREMENT_HOME,
  CURRENT_GAME_DECREMENT_HOME,
  CURRENT_GAME_INCREMENT_VISITOR,
  CURRENT_GAME_DECREMENT_VISITOR,
  SET_HOME_TEAM_SCORE,
  SET_VISITOR_TEAM_SCORE,
  SET_CURRENT_GAME_SCORE_FROM_WATCH,
} from '.';

export const currentGameIncrementHomeTeam = createAction(
  CURRENT_GAME_INCREMENT_HOME,
);
export const currentGameDecrementHomeTeam = createAction(
  CURRENT_GAME_DECREMENT_HOME,
);
export const currentGameIncrementVisitorTeam = createAction(
  CURRENT_GAME_INCREMENT_VISITOR,
);
export const currentGameDecrementVisitorTeam = createAction(
  CURRENT_GAME_DECREMENT_VISITOR,
);
export const setHomeTeamScore = createAction(SET_HOME_TEAM_SCORE);
export const setVisitorTeamScore = createAction(SET_VISITOR_TEAM_SCORE);
export const updateCurrentGameFromWatch = createAction(
  SET_CURRENT_GAME_SCORE_FROM_WATCH,
);
