import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './counterReducer';
import level from './levelReducer';

const reducer = combineReducers({
  counter,
  level
});

const preloadedState = {
  counter: {
    counter: 0
  },
  level: {
    level: 'EASY'
  }
};

const store = configureStore({ reducer, preloadedState });

export default store;
