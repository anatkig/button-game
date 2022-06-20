const initialState = {
  counter: 0,
  overdrive: false
};

const times = [] as number[];

const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT': {
      times.push(Date.now());
      const lastClickTimes = times.slice(times.length - 3);
      const overdriveEvent = Math.floor(Math.random() * 11);

      if (lastClickTimes[2] - lastClickTimes[0] <= 1000) {
        return { ...state };
      } else if (overdriveEvent === 1) {
        return { ...state, counter: state.counter + 2, overdrive: true };
      } else return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
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
