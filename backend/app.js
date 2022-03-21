const bodyParser = require('body-parser');
const path = require("path");
const express = require("express");
const app = express();
var cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "..", "build")));

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
  
  
  app.use('/education',require('./api/education/education.controller'));

  app.use('/ansoka', require('./api/ansoka/ansoka.controller'));
  
  
  /*app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
  */
 app.use('/courses', courseEndpoints);
 

 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
 });

 app.use('/courses', courseEndpoints);
 app.use('/education',require('./api/education/education.controller'));
  app.listen(3001, () => {
    console.log("server started on port 3001");
  });
  