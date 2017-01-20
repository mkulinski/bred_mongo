import React from 'react';
import { Link } from 'react-router';

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/expense">Expenses</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
