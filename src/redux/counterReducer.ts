import { Action } from '../types/types';
import {
  INCREMENT,
  DECREMENT,
  SET_OVERDRIVE,
  CANCEL_OVERDRIVE
} from '../constants/constants';

const initialState = {
  counter: 0,
  overdrive: false
};

const counter = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT: {
      if (state.overdrive) {
        return { ...state, counter: state.counter + 2 };
      } else return { ...state, counter: state.counter + 1 };
    }

    case DECREMENT: {
      return { ...state, counter: state.counter - 1 };
    }
    case SET_OVERDRIVE: {
      return { ...state, overdrive: true };
    }
    case CANCEL_OVERDRIVE: {
      return { ...state, overdrive: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default counter;
