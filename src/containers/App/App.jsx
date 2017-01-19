import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/userActions';
import Nav from '../Nav';

const App = props =>
  <div className="appContainer">
    <Nav {...props} />
    {React.cloneElement(props.children, props)}
  </div>;

// const mapStateToProps = store => store;
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUser: userInfo => dispatch(addUser(userInfo)),
//     verifyUser: userInfo => dispatch(verifyUser(userInfo)),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Nav);

function mapStateToProps(state) {
  console.log('state.expenses', state.expenses)
  return {
    user: state.user,
    expenses: state.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
