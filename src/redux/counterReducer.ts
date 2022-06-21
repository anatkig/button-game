import { Action } from '../types/types';

const initialState = {
  counter: 0,
  overdrive: false
};

const counter = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      if (state.overdrive) {
        return { ...state, counter: state.counter + 2 };
      } else return { ...state, counter: state.counter + 1 };
    }

    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
    case 'SET_OVERDRIVE': {
      return { ...state, overdrive: true };
    }
    case 'CANSEL_OVERDRIVE': {
      return { ...state, overdrive: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default counter;
