
var express = require('express');
var app = express();


console.log("Hello World");

app.get("/", (req, res) => {
  res.send("Hello Express");
});


absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

var response = "Hello Json";
if (process.env.MESSAGE_STYLE == "uppercase") {
  response = response.toUpperCase();
};


app.get("/json", (req, res) => {
  res.json({"message": response});
});

























 module.exports = app;
