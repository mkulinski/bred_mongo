import * as types from '../actions/actionTypes';

const initialState = {
  username: '',
  expenses: ['boo'],
};

function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EXPENSE: {
      return Object.assign({}, state, { expenses: action.payload.exp });
    }
    default:
      return state;
  }
}

export default expenseReducer;
