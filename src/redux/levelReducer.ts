import { Action } from '../types/types';

const initialState = {
  level: 'MEDIUM'
};

const level = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'EASY': {
      return { ...state, level: 'EASY' };
    }
    case 'MEDIUM': {
      return { ...state, level: 'MEDIUM' };
    }
    case 'HARD': {
      return { ...state, level: 'HARD' };
    }
    default: {
      return { ...state };
    }
  }
};

export default level;
