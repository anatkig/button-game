import store from '../redux/store';

export interface State {
  counter: {
    counter: number;
    overdrive: boolean;
  };
  level: {
    level: string;
  };
  star: string[];
}

export interface Action {
  type: string;
}

export type AppDispatch = typeof store.dispatch;
