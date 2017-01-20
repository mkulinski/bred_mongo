const Expense = require('../models/expenseModel');

function getAllExpenses(req, res) {
  Expense.find({ username: req.params.username }, (err, expenses) => {
    if (err) return res.send(new Error('cannot find user expenses'));
    console.log('expenses', expenses)
    return res.json(expenses);
  });
}

function createExpense(req, res) {
  Expense.create(new Expense(req.body), (err, expRes) => {
    if (err) return res.status(401).json({ err });
    return res.json({ status: 'successful', payload: expRes });
  });
}

module.exports = { getAllExpenses, createExpense };
