import {combineReducers} from 'redux';
import {moviesReducer} from './moviesReducer';
import {actorsReducer} from './actorsReducer';
import {searchReducer} from './searchReducer';

export const rootReducer = combineReducers({
  moviesReducer,
  actorsReducer,
  searchReducer,
});
