const express = require("express");
const router = express.Router();
const Personal = require('./personal.model');
const PersonalService = require('./personal.service');

router.post('/createPersonal', async (req, res) => {
        const course = await CourseService.createCourse(req.body);
        if(!course.error) {
            res.status(200).send(course);
        }   else {
            res.status(401).send({error: "Keff input"})
        }

});

router.get('/showPersonal', async (req, res) => {
    const courses = await CourseService.showCourses();
    if(courses.length >= 1){
        res.status(200).send(courses);
    } else {
        res.status(404).send({error: 'Ingen personal found'})
    }
});

router.get('/showPersonal/:id', async (req, res) => {
    const course = await CourseService.showCourse(req.params.id);
    if(course){
        res.status(200).send(course);
    } else {
        res.status(404).send({error: 'ingen personal with that id found.'})
    }
});

router.patch('/updatePersonal/:id', async (req,res) => {
    
    const course = await CourseService.updateCourse(req.params.id, req.body);
    if(course){
        res.status(200).send(course);
    } else {
        res.status(404).send({error: 'ingen personal with that id found.'})
    }
});

router.delete('/deletePersonal/:id', async (req,res)=> {
    const course = await CourseService.deleteCourse(req.params.id);
    if(!course.error){
        res.status(204).send();
    }else {
        res.status(404).send({ error: "Personal with given id doesn't exist" });
    }
});

module.exports = router;