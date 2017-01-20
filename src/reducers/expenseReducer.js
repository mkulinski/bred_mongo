import * as types from '../actions/actionTypes';

// const initialState = {
//   username: '',
//   expenses: ['boo'],
// };

function expenseReducer(state = [], action) {
  switch (action.type) {
    case 'SET_USER_EXPENSES':
      return Object.assign({}, state, {
        expenses: action.payload,
      });
    default:
      return state;
  }
}

export default expenseReducer;
