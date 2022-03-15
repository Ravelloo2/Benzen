const bodyParser = require('body-parser');
const path = require("path");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use('/utbildningar',require('./api/utbildningar.js'));
app.use('/courses', require('./api/courses/courses.controller'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.listen(3001, () => {
  console.log("server started on port 3001");
});
