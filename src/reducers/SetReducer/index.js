import {
  COMPLETE_SET,
  DECREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE,
  INCREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE,
  DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE,
  INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE,
  FIX_SET_COUNT_FROM_WATCH,
} from '../../actions/SetActions';
import {RESET_EVERYTHING} from '../../actions/MatchActions';
const initialState = {
  sets: [],
};

const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_SET:
      return {
        ...state,
        sets: [...state.sets, action.payload],
      };
    case INCREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE: {
      const newSets = [...state.sets];
      const setToModify = {...newSets[action.payload.index]};
      newSets[action.payload.index] = {
        ...setToModify,
        home: setToModify.home + 1,
        isHomeWinner: setToModify.home + 1 >= setToModify.visitor,
      };
      return {
        ...state,
        sets: newSets,
      };
    }
    case DECREASE_SPECIFIC_SET_FOR_HOME_TEAM_COMPLETE: {
      const newSets = [...state.sets];
      const setToModify = {...newSets[action.payload.index]};
      newSets[action.payload.index] = {
        ...setToModify,
        home: setToModify.home <= 0 ? 0 : setToModify.home - 1,
        isHomeWinner: setToModify.home - 1 >= setToModify.visitor,
      };
      return {
        ...state,
        sets: newSets,
      };
    }
    case INCREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE: {
      const newSets = [...state.sets];
      const setToModify = {...newSets[action.payload.index]};
      newSets[action.payload.index] = {
        ...setToModify,
        visitor: setToModify.visitor + 1,
        isHomeWinner: setToModify.home >= setToModify.visitor + 1,
      };
      return {
        ...state,
        sets: newSets,
      };
    }
    case DECREASE_SPECIFIC_SET_FOR_VISITOR_TEAM_COMPLETE: {
      const newSets = [...state.sets];
      const setToModify = {...newSets[action.payload.index]};
      newSets[action.payload.index] = {
        ...setToModify,
        visitor: setToModify.visitor <= 0 ? 0 : setToModify.visitor - 1,
        isHomeWinner: setToModify.home >= setToModify.visitor - 1,
      };
      return {
        ...state,
        sets: newSets,
      };
    }
    case RESET_EVERYTHING:
      return initialState;
    case FIX_SET_COUNT_FROM_WATCH: {
      return {
        ...state,
        sets: action.payload.sets,
      };
    }
    default:
      return state;
  }
};

export default setReducer;
