const bodyParser = require('body-parser');
const path = require("path");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

const mongoose = require('mongoose');
const endpoints = require('./api/courses/course.controller') 



mongoose
.connect('mongodb+srv://mongomeron:mongomeron@cluster0.untda.mongodb.net/Cluster0', {useNewUrlParser: true})
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
    process.exit();
  });

  
  
  app.use('/utbildningar',require('./api/utbildningar.js'));
  
  /*app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
  */
 app.use('/course', endpoints);

  app.listen(3001, () => {
    console.log("server started on port 3001");
  });
  