import React from 'react';
import Pie from './category_pie';
import ProgressBar from './progress_bar';


const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <h2 className="signup-header flex">Dashboard</h2>
      <h3 className="expenses">Expenses vs. Income</h3>
      <ProgressBar
        expenses={props.expenses.expenses}
        income={props.user.income}
      />
      <h3 className="expenses">Recent Expenses Breakdown</h3>
      <div className="flex">
        <Pie expenses={props.expenses.expenses} />
      </div>
    </div>
  );
}

export default Dashboard;
