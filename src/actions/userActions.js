import * as types from './actionTypes';

export function addUser(usr) {
  return {
    type: types.ADD_USER,
    usr,
  };
}

export function verifyUser(usr) {
  return {
    type: types.VERIFY_USER,
    usr,
  };
}

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
