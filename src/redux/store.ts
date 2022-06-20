import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import levelReducer from './levelReducer';

const reducer = combineReducers({
  counterReducer,
  levelReducer
});

const store = configureStore({ reducer });

export default store;
