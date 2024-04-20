import { combineReducers } from 'redux';
import streams from "./streams"
import headlines from './headlines';
import isAuthenticated from './isAuthenticated';

export const reducers = combineReducers({ streams, headlines, isAuthenticated });
