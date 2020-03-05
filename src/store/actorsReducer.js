import {SET_ACTORS, SET_SELECTED_ACTOR} from './types';

const initialState = {
  actors: null,
  selectedActor: null,
};

export const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTORS:
      return {...state, actors: action.payload};

    case SET_SELECTED_ACTOR: {
      return {...state, selectedActor: action.payload};
    }
  }
  return state;
};