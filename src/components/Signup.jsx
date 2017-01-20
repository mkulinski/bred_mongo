import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.onSub = this.onSub.bind(this);
  }

  onSub(evt) {
    evt.preventDefault();

    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const confirmPassword = this.refs.confPassword.value;
    const income = this.refs.income.value;

    // this.props.createUser({
    //   username,
    //   email,
    //   password,
    //   income,
    // });
  }

  render() {
    return (
      <div className="component-container">
        <h1 className="signup-header">BRED</h1>
        <h3 className="signup-subhead">Sign up now</h3>
        <form onSubmit={this.onSub}>
          <input
            className="signup-input input"
            type="text"
            ref="username"
            placeholder="username"
          />
          <input
            className="signup-input input"
            type="text"
            ref="email"
            placeholder="email"
          />
          <input
            className="signup-input input"
            type="password"
            ref="password"
            placeholder="password"
          />
          <input
            className="signup-input input"
            type="password"
            ref="confPassword"
            placeholder="confirm password"
          />
          <input
            className="signup-input input"
            type="text"
            ref="income"
            placeholder="income"
          />
          <button type="submit" className="submit-button submit">
            Submit
          </button>
        </form>
        <h5>
          {'Already with us? '}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </h5>
      </div>
    );
  }
}
