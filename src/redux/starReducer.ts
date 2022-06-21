import { Action } from '../types/types';

const stars = [] as string[];

const star = (state = stars, action: Action) => {
  switch (action.type) {
    case 'ADD_STAR': {
      return [...state, 'star'];
    }

    default: {
      return [...state];
    }
  }
};

export default star;
