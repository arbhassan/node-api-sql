var User = require("../models/").user;

exports.getUsers = function(req, res) {
  User.findAll().then(function(todos) {
    res.json(todos);
  });
};

exports.createUser = function(req, res) {
  User.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.getUser = function(req, res) {
  User.findByPk(req.params.userId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.updateUser = function(req, res, next) {
  User.findByPk(req.params.userId)
    .then(foundTodo => {
      foundTodo.update(req.body);
    })
    .then(function(rowUpdated) {
      res.json(rowUpdated);
    });
};
exports.deleteUser = function(req, res) {
  User.findByPk(req.params.userId)
    .then(foundUser => {
      foundUser.destroy();
    })
    .then(function() {
      res.json({ message: "We Deleted it!" });
    });
};
