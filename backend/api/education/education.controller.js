const express = require("express");
const router = express.Router();
const Education = require('./education.model');
const EducationService = require('./education.service');


router.post('/createEducation', async (req,res) => {
    const createEducation = new Education({
        name: '30 Hours',
        educationLeader: 'Pete Davidson',
        courses: ['Life of Pablo','Donda Chant','Heartless'],
        description: 'Guess whos going to jail tonight ;)',
    })
    await createEducation.save()
    res.status(200).send(createEducation)
})

router.get('/AllEducation', async (req, res) => {
    const showEducation = await EducationService.showEducations()
    showEducation ?  res.status(200).send(showEducation)   :   res.status(404).send({error: 'Error with getting files'})});

router.get('/AllEducation/:id', async (req, res) => {
    const showOneEducation = await EducationService.showEducations(req.params.id);
    showOneEducation ?  res.status(200).send(showOneEducation)  :  res.status(404).send({error: 'Error with getting file'})});

router.patch('/:id', async (req,res) => {});

router.delete('/:id', async (req,res)=> {
    const education = await EducationService.deleteOneEducation(req.params.id);
    !education.error ? res.status(200).send({status: 'succesfully deleted file :) '}) :  res.status(404).send({ error: "Error with deleting file" });});

router.delete('/', async (req,res) => {
    const deleteAllEducation = await Education.deleteMany()
    !deleteAllEducation.error ? res.status(200).send( {status: 'successfully deleted all :)'}) : res.status(404).send({error: ' Couldnt delete them all :('})});


module.exports = router;
