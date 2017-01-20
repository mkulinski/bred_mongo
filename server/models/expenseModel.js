const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  recurring: {
    type: Boolean,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Expense', expenseSchema);
