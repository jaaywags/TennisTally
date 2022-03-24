import {UPDATE_APPLE_WATCH_REACHABLE} from '../../actions/WatchActions';
const initialState = {
  isAppleWatchReachable: false,
  isAndroidWatchReachable: false,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_APPLE_WATCH_REACHABLE:
      console.log('set reachable: ', action.payload);
      return {
        ...state,
        isAppleWatchReachable: action.payload.isReachable,
      };
    default:
      return state;
  }
};

export default watchReducer;
