import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './counterReducer';
import level from './levelReducer';

const reducer = combineReducers({
  counter,
  level
});

const store = configureStore({ reducer });

export default store;
