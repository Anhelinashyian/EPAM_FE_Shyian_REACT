import {SET_SEARCH_VALUE} from './types';

const initialState = {
  searchValue: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
  }
  return state;
};