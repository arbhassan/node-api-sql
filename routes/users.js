var express = require("express");
var router = express.Router();
var db = require("../models/index");
var helpers = require("../helpers/users");

router
  .route("/")
  .get(helpers.getUsers)
  .post(helpers.createUser);

router
  .route("/:userId")
  .get(helpers.getUser)
  .put(helpers.updateUser)
  .delete(helpers.deleteUser);

module.exports = router;
