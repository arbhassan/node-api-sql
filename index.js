var express = require("express");
let app = express();
let bodyparser = require("body-parser");
let port = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");
var userRoutes = require("./routes/users");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HELLO FROM THE ROOT ROUTE");
});

app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log("APP IS RUNNING ON PORT " + port);
});
