var Todo = require("../models/").todo;

exports.getTodos = function(req, res) {
  Todo.findAll().then(function(todos) {
    res.json(todos);
  });
};

exports.createTodo = function(req, res) {
  Todo.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.getTodo = function(req, res) {
  Todo.findByPk(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.updateTodo = function(req, res, next) {
  Todo.findByPk(req.params.todoId)
    .then(foundTodo => {
      foundTodo.update(req.body);
    })
    .then(function(rowUpdated) {
      res.json(rowUpdated);
    });
};
exports.deleteTodo = function(req, res) {
  Todo.findByPk(req.params.todoId)
    .then(foundTodo => {
      foundTodo.destroy();
    })
    .then(function() {
      res.json({ message: "We Deleted it!" });
    });
};
