import * as types from './actionTypes';

export function addExpense(exp) {
  return {
    type: types.ADD_EXPENSE,
    payload: exp,
  };
}

export function getExpenses(exp) {
  return {
    type: types.GET_EXPENSE,
    payload: exp,
  };
}
