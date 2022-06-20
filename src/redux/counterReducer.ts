const initialState = {
  counter: 0
};

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
  }
};

export default counter;
