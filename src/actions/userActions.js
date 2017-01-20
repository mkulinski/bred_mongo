import axios from 'axios';
import { push } from 'react-router-redux';

export function changeUserInfo(username, email) {
  return {
    type: 'CHANGE_USER_INFO',
    username,
    email,
  };
}

function getUserExpenses(username) {
  return (dispatch) => {
    axios.get(`http://localhost:3000/expense/${username}`)
    .then((response) => {
      dispatch({ type: 'SET_USER_EXPENSES', payload: response.data });
    })
    .then(() => {
      dispatch(push('/dashboard'));
    })
    .catch(err => console.log('err', err));
  };
}

export function sendLoginData(userObj) {
  return (dispatch) => {
    axios.get(`http://localhost:3000/login/${userObj.username}/${userObj.password}`)
    .then((response) => {
      dispatch({ type: 'SEND_LOGIN_DATA_SUCCESS', payload: response.data });
    })
    .then(() => {
      dispatch(getUserExpenses(userObj.username));
    })
    .catch((err) => {
      dispatch({ type: 'SEND_LOGIN_DATA_ERROR', error: err });
    });
  };
}
