import {createAction} from 'redux-actions';
import {INCREMENT_HOME_TEAM_SET, INCREMENT_VISITOR_TEAM_SET} from '.';

export const setIncrementHomeTeam = createAction(INCREMENT_HOME_TEAM_SET);
export const setIncrementVisitorTeam = createAction(INCREMENT_VISITOR_TEAM_SET);
