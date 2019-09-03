"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "todo",
    {
      title: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {}
  );
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
