// Eliaz Kod

const express = require('express');
const router = express.Router();
const Apply = require('./ansoka.model')
const AnsokaService = require('./ansoka.service')
const EducationService = require('../education/education.service')

router.post('/', async (req, res) => {
    const application = await AnsokaService.createApplication(req.body);
    if (application) {
        res.status(200).send(application);
    } else {
        res.status(400).send({ error: 'bad input' })
    }
})

router.get('/allApplication', async (req, res) => {
    const showApplication = await AnsokaService.showApplication()
    console.log(AnsokaService.showApplication)
    console.log(showApplication)
    if(showApplication) {
        res.status(200).send(showApplication);
    } else {
        res.status(404).send({ error: "No application found" })
    }
});

router.get('/showOneApplication/:id', async (req, res) => {
    const oneApplication = await AnsokaService.showOneApplication(req.params.id);
    if(oneApplication){
        res.status(200).send(oneApplication);
    } else {
        res.status(404).send({ error: "No application with that id found!" })
    }
});

router.patch('/updateApplication/:id', async (req,res) => {
    const application = await AnsokaService.updateApplication(req.params.id, req.body);
    if (application) {
      res.status(200).send(application);
    } else {
      res.status(404).send({ error: "no application found with matching id." });
    }
    });

router.delete('/deleteApplication/:id', async (req, res) =>{
    const application = await AnsokaService.deleteApplication(req.params.id)
    if (!application.error) {
        res.status(204).send()
    } else {
        res.status(404).send({ error: "Application with that id was not found!" })
    }
});

router.get('/AllEducation', async (req, res) => {
    const showEducation = await EducationService.showEducations()
    showEducation ?  res.status(200).send(showEducation)   :   res.status(404).send({error: 'Error with getting files'})});

router.get('/AllEducation/:id', async (req, res) => {
    const showOneEducation = await EducationService.showEducations(req.params.id);
    showOneEducation ?  res.status(200).send(showOneEducation)  :  res.status(404).send({error: 'Error with getting file'})});

module.exports = router;