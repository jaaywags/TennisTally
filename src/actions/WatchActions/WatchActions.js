import {createAction} from 'redux-actions';
import {UPDATE_APPLE_WATCH_REACHABLE, UPDATE_WATCH_SCORE} from '.';

export const updateAppleWatchReachable = createAction(
  UPDATE_APPLE_WATCH_REACHABLE,
);
export const updateWatchScore = createAction(UPDATE_WATCH_SCORE);
