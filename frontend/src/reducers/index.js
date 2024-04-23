import { combineReducers } from 'redux';
import streams from "./streams"
import headlines from './headlines';
import isAuthenticated from './isAuthenticated';
import subscribed from './subscribed';

export const reducers = combineReducers({ streams, headlines, isAuthenticated, subscribed });
