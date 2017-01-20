import React from 'react';


export default class Login extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.sendLoginData({ username, password });

    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  render() {
    return (
      <div className="component-container">
        <h1 className="signup-header">BRED</h1>
        <h3 className="signup-subhead">Login</h3>
        <form onSubmit={this.onSubmit}>
          <input
            className="signup-input input"
            type="text"
            ref="username"
            placeholder="username"
          />
          <input
            className="signup-input input"
            type="password"
            ref="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="submit-button submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
