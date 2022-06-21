const initialState = {
  counter: 0,
  overdrive: false
};

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
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
