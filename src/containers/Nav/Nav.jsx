import React from 'react';
import { connect } from 'react-redux';
import { verifyUser, addUser } from '../../actions/userActions';

const Nav = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Login/Log out</li>
      </ul>
    </div>
  );
};

export default Nav;
