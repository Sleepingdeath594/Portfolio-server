var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/AboutMe", function (req, res) {
  res.render("About.ejs", {});
});
app.get("/Contact", function (req, res) {
  res.render("Contact.ejs", {});
});
app.get("/", function (req, res) {
  res.render("Home.ejs", {});
});

app.listen(PORT, function () {
  console.log("We are here:" + PORT);
});
