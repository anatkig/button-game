const initialState = {
  counter: 0
};

const times = [] as number[];

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT': {
      times.push(Date.now());
      const lastClickTimes = times.slice(times.length - 3);
      if (lastClickTimes[2] - lastClickTimes[0] <= 1000) {
        return { ...state };
      } else return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
    default: {
      return { ...state };
    }
  }
};

export default counter;
