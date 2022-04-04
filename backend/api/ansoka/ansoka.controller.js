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

router.get('/AllEducation', async (req, res) => {
    const showEducation = await EducationService.showEducations()
    showEducation ?  res.status(200).send(showEducation)   :   res.status(404).send({error: 'Error with getting files'})});

router.get('/AllEducation/:id', async (req, res) => {
    const showOneEducation = await EducationService.showEducations(req.params.id);
    showOneEducation ?  res.status(200).send(showOneEducation)  :  res.status(404).send({error: 'Error with getting file'})});

module.exports = router;