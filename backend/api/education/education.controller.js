/* Jontes */
const express = require("express");
const router = express.Router();
const Education = require('./education.model');
const EducationService = require('./education.service');


router.post('/createBackendEducation', async (req,res) => {
    const createEducation = new Education({
        name: 'Webbsäkerhet',
        educationLeader: 'Pablo Escobar',
        length: 2,
        place: 'Klassrum',
        points: 400,
        courses: ['test','test'],
        description: 'Description',
    })
    await createEducation.save()
    res.status(200).send(createEducation)
})

router.post('/createEducation', async (req,res) => {
    const education = await EducationService.createEducation(req.body);
    education ? 
        res.status(200).send(education) : res.status(404).send({ error: "bad input" })
    })
router.get('/AllCourses', async (req,res) => {
    const getAllCourses = await EducationService.getCourses()
    getAllCourses ? res.status(200).send(getAllCourses) : res.status(404).send({error: 'Error with getting files'})});

router.get('/AllPersonal', async (req,res) => {
    const getAllPersonal = await EducationService.getPersonal()
    getAllPersonal ? res.status(200).send(getAllPersonal) : res.status(404).send({error: 'Error with getting files'})});

router.get('/AllEducation', async (req, res) => {
    const showEducation = await EducationService.showEducations()
    showEducation ?  res.status(200).send(showEducation)   :   res.status(404).send({error: 'Error with getting files'})});

router.get('/AllEducation/:id', async (req, res) => {
    const showOneEducation = await EducationService.showEducations(req.params.id);
    showOneEducation ?  res.status(200).send(showOneEducation)  :  res.status(404).send({error: 'Error with getting file'})});

router.patch('/updateEducation/:id', async (req,res) => {
    const education = await EducationService.updateEducation(req.params.id, req.body);
    {education ? (res.status(200).send(education)): (res.status(404).send({ error: "no education found with matching id." }))};
    });
    
router.delete('/delete/:id', async (req,res)=> {
    const education = await EducationService.deleteOneEducation(req.params.id);
    !education.error ? res.status(200).send({status: 'succesfully deleted file :) '}) :  res.status(404).send({ error: "Error with deleting file" });});

router.delete('delete/', async (req,res) => {
    const deleteAllEducation = await Education.deleteMany()
    !deleteAllEducation.error ? res.status(200).send( {status: 'successfully deleted all :)'}) : res.status(404).send({error: ' Couldnt delete them all :('})});


module.exports = router;
