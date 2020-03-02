import {SET_ACTORS} from './types';

const initialState = {
  actors: null,
};

export const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTORS:
      return {...state, actors: action.payload};
  }
  return state;
};