const express = require("express");
const pug = require("pug");
const bodyParser = require("body-parser");
const app = express();

const path = require("path");
var resultstr = "masterchief";
var persons = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/math", (req, res) => {
  res.render("math");
});
app.post("/math", (req, res) => {
  num1 = parseInt(req.body.num1);
  num2 = parseInt(req.body.num2);
  num = (num1 + num2).toString();
  res.render("math", { result: num });
  // res.send("Congratulations!!")
  // console.log("post method success")
});

app.get("/person", (req, res) => {
  res.render("person");
});
app.post("/person", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  var person = { name: name, age: age };
  persons.push(person);
  res.render("person", { result: persons });
});

app.get("/name/:name", (req, res) => {
  res.send({ name: req.params.name });
});
app.get("/admin", (req, res) => {
  res.send("Welcome to the admin page");
});
app.get("/captain", (req, res) => {
  res.send(resultstr);
});
app.listen(11022, () => console.log("Example app listening on port 11022!"));
