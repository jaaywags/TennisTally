import {
  INCREMENT_HOME_TEAM_SET,
  INCREMENT_VISITOR_TEAM_SET,
} from '../../actions/SetActions';
import {RESET_EVERYTHING} from '../../actions/MatchActions';
const initialState = {
  homeTeam: 0,
  visitorTeam: 0,
};

const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HOME_TEAM_SET:
      return {
        ...state,
        homeTeam: state.homeTeam + 1,
      };
    case INCREMENT_VISITOR_TEAM_SET:
      return {
        ...state,
        visitorTeam: state.visitorTeam + 1,
      };
    case RESET_EVERYTHING:
      return initialState;
    default:
      return state;
  }
};

export default setReducer;
