import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import App from './containers/App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DashBoard from './components/DashBoard';

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/Dashboard" component={DashBoard} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
