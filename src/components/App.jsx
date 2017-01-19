import React from 'react';
import Nav from './Nav';
import UsersDashboard from './UsersDashboard';

const App = () => {
  return (
    <div className="appContainer">
      <Nav />
      {React.cloneElement(this.props.children, this.props)}
    </div>
  );
};

export default App;
