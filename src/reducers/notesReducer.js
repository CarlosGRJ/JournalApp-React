/*
    {
        notes: [],
        active: null,
        active: {
            id: 'fsdfsdfsffwf344w',
            title: '',
            body: '',
            imageUrl: '',
            date: 1213212312315
        }
    }
*/

import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
