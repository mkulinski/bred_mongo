import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';
import expenseReducer from './expenseReducer';

const reducers = combineReducers({
  user: userReducer,
  expenses: expenseReducer,
  routing: routerReducer,
});

export default reducers;
