import {createAction} from 'redux-actions';
import {
  INCREMENT_HOME_TEAM_GAME,
  INCREMENT_VISITOR_TEAM_GAME,
  DECREMENT_HOME_TEAM_GAME,
  DECREMENT_VISITOR_TEAM_GAME,
  RESET_GAMES,
} from '.';

export const gameIncrementHomeTeam = createAction(INCREMENT_HOME_TEAM_GAME);
export const gameDecrementHomeTeam = createAction(DECREMENT_HOME_TEAM_GAME);
export const gameIncrementVisitorTeam = createAction(
  INCREMENT_VISITOR_TEAM_GAME,
);
export const gameDecrementVisitorTeam = createAction(
  DECREMENT_VISITOR_TEAM_GAME,
);
export const resetGames = createAction(RESET_GAMES);
