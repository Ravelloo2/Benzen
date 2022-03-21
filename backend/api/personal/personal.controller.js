const express = require("express");
const router = express.Router();
const PersonalService = require('./personal.service');

router.post('/createPersonal', async (req, res) => {
        const personal = await PersonalService.createPersonal(req.body);
        if(!personal.error) {
            res.status(200).send(course);
        }   else {
            res.status(401).send({error: "Keff input"})
        }

});

router.get('/showPersonal', async (req, res) => {
    const personal = await CourseService.showPersonal();
    if(personal.length >= 1){
        res.status(200).send(courses);
    } else {
        res.status(404).send({error: 'Ingen personal found'})
    }
});

router.get('/showPersonal/:id', async (req, res) => {
    const personal = await PersonalService.showPersonal(req.params.id);
    if(personal){
        res.status(200).send(course);
    } else {
        res.status(404).send({error: 'ingen personal with that id found.'})
    }
});

router.patch('/updatePersonal/:id', async (req,res) => {
    
    const personal = await PersonalService.updatePersonal(req.params.id, req.body);
    if(personal){
        res.status(200).send(course);
    } else {
        res.status(404).send({error: 'ingen personal with that id found.'})
    }
});

router.delete('/deletePersonal/:id', async (req,res)=> {
    const personal = await PersonalService.deletePersonal(req.params.id);
    if(!personal.error){
        res.status(204).send();
    }else {
        res.status(404).send({ error: "Personal with given id doesn't exist" });
    }
});

module.exports = router;