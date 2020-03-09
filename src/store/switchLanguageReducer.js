import {SET_ACTIVE_LANGUAGE} from './types';

const initialState = {
  active: 'EN',
};

export const switchLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_LANGUAGE:
      return {...state, active: action.payload};
  }
  return state;
};