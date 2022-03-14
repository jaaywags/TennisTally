import {
  SET_HOME_TEAM_SCORE,
  SET_VISITOR_TEAM_SCORE,
} from '../../actions/GameActions';
import {RESET_EVERYTHING} from '../../actions/MatchActions';
const initialState = {
  homeTeamValue: 0,
  homeTeamFriendly: 'LOVE',
  visitorTeamValue: 0,
  visitorTeamFriendly: 'LOVE',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_TEAM_SCORE:
      return {
        ...state,
        homeTeamValue: action.payload.score,
        homeTeamFriendly: action.payload.friendly,
      };
    case SET_VISITOR_TEAM_SCORE:
      return {
        ...state,
        visitorTeamValue: action.payload.score,
        visitorTeamFriendly: action.payload.friendly,
      };
    case RESET_EVERYTHING:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
