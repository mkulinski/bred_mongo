const User = require('../models/userModel');

const userController = {};

userController.getAllUsers = (next) => {
  User.find({}, next);
};

userController.checkLogin = (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) return res.send(new Error('cannot find user'));
    if (req.params.password === user.password) {
      return res.json({ status: 'successful' });
    }

    return res.json({ status: 'failed' });
  });
};

userController.restrict = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    req.error = 'Access denied!';
    res.end(req.error);
  }
};

userController.createUser = (req, res, next) => {
  User.create(new User(req.body), (err, userResult) => {
    if (err) {
      return res.status(401).json({ err });
    }

    return res.status(200).json({ status: 'Signup successful!' });
  });
};

function authenticate(name, pass, callback) {
  User.findOne({ username: name }, (err, user) => {
    if (!user) return callback(new Error('cannot find user'));
    if (pass === user.password) {
      return callback(null, user);
    }
    return callback(null, 'password does not match');
  });
}

module.exports = userController;
