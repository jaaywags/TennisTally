import {createAction} from 'redux-actions';
import {
  COMPLETE_SET,
  INCREMENT_HOME_TEAM_SET,
  INCREMENT_VISITOR_TEAM_SET,
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM,
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM,
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM,
} from '.';

export const completeSet = createAction(COMPLETE_SET);
export const setIncrementHomeTeam = createAction(
  INCREMENT_HOME_TEAM_SET,
  () => {
    return {isHomeWinner: true};
  },
);
export const setIncrementVisitorTeam = createAction(
  INCREMENT_VISITOR_TEAM_SET,
  () => {
    return {isHomeWinner: false};
  },
);
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
