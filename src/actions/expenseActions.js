import * as types from './actionTypes';

export function addExpense(exp) {
  return {
    type: types.ADD_USER,
    payload: exp,
  };
}

// export function verifyUser(usr) {
//   return {
//     type: types.VERIFY_USER,
//     usr,
//   };
// }
