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

function mapStateToProps(state) {
  return {
    user: state.user,
    expenses: state.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
