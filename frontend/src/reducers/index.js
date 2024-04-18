import { combineReducers } from 'redux';
import streams from "./streams"
import headlines from './headlines';

export const reducers = combineReducers({ streams, headlines });
