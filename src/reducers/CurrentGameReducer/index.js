import {
  SET_HOME_TEAM_SCORE,
  SET_VISITOR_TEAM_SCORE,
} from '../../actions/CurrentGameActions';
import {RESET_EVERYTHING} from '../../actions/MatchActions';
import {RESET_GAMES} from '../../actions/GameActions';
const initialState = {
  homeTeamValue: 0,
  homeTeamFriendly: 'LOVE',
  visitorTeamValue: 0,
  visitorTeamFriendly: 'LOVE',
};

const currentGameReducer = (state = initialState, action) => {
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
    case RESET_GAMES:
      return initialState;
    default:
      return state;
  }
};

export default currentGameReducer;
