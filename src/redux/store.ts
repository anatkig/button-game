import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './counterReducer';
import level from './levelReducer';
import star from './starReducer';

const reducer = combineReducers({
  counter,
  level,
  star
});

const store = configureStore({ reducer });

export default store;
