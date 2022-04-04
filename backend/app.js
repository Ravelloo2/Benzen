const bodyParser = require('body-parser');
const path = require("path");
const express = require("express");
const app = express();
const nodemailer = require('nodemailer')

var cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require('mongoose');
const courseEndpoints = require('./api/courses/course.controller'); 
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

mongoose
.connect('mongodb+srv://beder:sparken@benzendb.untda.mongodb.net/BenzenDB?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
    process.exit();
  });

  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  

app.use('/courses', courseEndpoints);
app.use('/education',require('./api/education/education.controller'));
app.use('/personal',require('./api/personal/personal.controller'));
app.use('/ansoka', require('./api/ansoka/ansoka.controller'))

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });

  app.listen(3001, () => {
    console.log("server started on port 3001");
  });