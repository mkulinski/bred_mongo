// import * as types from '../actions/actionTypes';

// const initialState = {
//   username: '',
//   loggedIn: false,
// };

function userReducer(state = {}, action) {
  switch (action.type) {
    case 'SEND_LOGIN_DATA_SUCCESS':
      return Object.assign({}, state, {
        username: action.payload.username,
        income: action.payload.income,
        loading: false,
        error: null,
      });
    case 'SEND_LOGIN_DATA_ERROR':
      return Object.assign({}, state, {
        username: '',
        loading: false,
        error: action.err,
      });
    case 'CHANGE_USER_INFO':
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
      });
    default:
      return state;
  }
}

export default userReducer;
