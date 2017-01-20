const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');

const app = express();

const mongoURI = 'mongodb://localhost:27017/bred';
mongoose.connect(mongoURI);

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './src')));

app.post('/signup', userController.createUser);
app.get('/login/:username/:password', userController.checkLogin);

app.post('/create-expense', expenseController.createExpense);
app.get('/expense/:username', expenseController.getAllExpenses);

app.listen(3000, () => {
  console.log('listening on 3000');
});
