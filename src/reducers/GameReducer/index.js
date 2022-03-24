import {
  INCREMENT_HOME_TEAM_GAME,
  INCREMENT_VISITOR_TEAM_GAME,
  DECREMENT_HOME_TEAM_GAME,
  DECREMENT_VISITOR_TEAM_GAME,
  RESET_GAMES,
  SET_GAMES_FROM_WATCH,
} from '../../actions/GameActions';
import {RESET_EVERYTHING} from '../../actions/MatchActions';
const initialState = {
  homeTeam: 0,
  visitorTeam: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HOME_TEAM_GAME:
      return {
        ...state,
        homeTeam: state.homeTeam + 1,
      };
    case INCREMENT_VISITOR_TEAM_GAME:
      return {
        ...state,
        visitorTeam: state.visitorTeam + 1,
      };
    case DECREMENT_HOME_TEAM_GAME:
      return {
        ...state,
        homeTeam: state.homeTeam > 0 ? state.homeTeam - 1 : state.homeTeam,
      };
    case DECREMENT_VISITOR_TEAM_GAME:
      return {
        ...state,
        visitorTeam:
          state.visitorTeam > 0 ? state.visitorTeam - 1 : state.visitorTeam,
      };
    case RESET_EVERYTHING:
    case RESET_GAMES:
      return initialState;
    case SET_GAMES_FROM_WATCH:
      return {
        ...state,
        homeTeam: action.payload.home,
        visitorTeam: action.payload.visitor,
      };
    default:
      return state;
  }
};

export default gameReducer;
