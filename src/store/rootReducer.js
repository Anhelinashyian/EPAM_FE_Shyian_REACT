import {combineReducers} from 'redux';
import {moviesReducer} from './moviesReducer';
import {actorsReducer} from './actorsReducer';
import {searchReducer} from './searchReducer';
import {switchLanguageReducer} from "./switchLanguageReducer";
import {reducer as formReducer} from 'redux-form';

export const rootReducer = combineReducers({
  moviesReducer,
  actorsReducer,
  searchReducer,
  switchLanguageReducer,
  form: formReducer,
});
