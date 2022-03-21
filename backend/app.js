const bodyParser = require('body-parser');
const path = require("path");
const express = require("express");
const app = express();
var cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

const mongoose = require('mongoose');
const courseEndpoints = require('./api/courses/course.controller') 
app.use(cors());


mongoose
.connect('mongodb://localhost:27017/BenzenDB', {useNewUrlParser: true})
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
    process.exit();
  });

  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  
  
  app.use('/utbildningar',require('./api/utbildningar.js'));
  
  /*app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
  */
 app.use('/courses', courseEndpoints);

  app.listen(3001, () => {
    console.log("server started on port 3001");
  });
  