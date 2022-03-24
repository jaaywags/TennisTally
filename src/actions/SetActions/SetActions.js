import {createAction} from 'redux-actions';
import {
  COMPLETE_SET,
  INCREMENT_HOME_TEAM_SET,
  INCREMENT_VISITOR_TEAM_SET,
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM,
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM,
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE,
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE,
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE,
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE,
  FIX_SET_COUNT_FROM_WATCH,
} from '.';

export const completeSet = createAction(COMPLETE_SET);
export const setIncrementHomeTeam = createAction(INCREMENT_HOME_TEAM_SET);
export const setIncrementVisitorTeam = createAction(INCREMENT_VISITOR_TEAM_SET);
export const decreaseSpecificSetForHomeTeam = createAction(
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM,
);
export const increaseSpecificSetForHomeTeam = createAction(
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM,
);
export const decreaseSpecificSetForVisitorTeam = createAction(
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
);
export const increaseSpecificSetForVisitorTeam = createAction(
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
);
export const decreaseSpecificSetForHomeTeamComplete = createAction(
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE,
);
export const increaseSpecificSetForHomeTeamComplete = createAction(
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE,
);
export const decreaseSpecificSetForVisitorTeamComplete = createAction(
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE,
);
export const increaseSpecificSetForVisitorTeamComplete = createAction(
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE,
);
export const fixSetCountFromWatch = createAction(FIX_SET_COUNT_FROM_WATCH);
