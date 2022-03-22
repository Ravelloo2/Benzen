const express = require('express');
const router = express.Router();
const Apply = require('./ansoka.model')
const AnsokaService = require('./ansoka.service')
const EducationService = require('../education/education.service')

router.post('/createApplication', async (req, res) => {
    const application = await AnsokaService.createApplication(req.body);
    if (!application.error) {
        res.status(200).send(application);
    } else {
        res.status(400).send({ error: 'bad input' })
    }
})

router.get('/showEducations', async (req, res) => {
    const educations = await EducationService.showEducations();
    if (educations.length >= 1) {
        res.status(200).send(educations)
    } else {
        res.status(404).send({ error: 'no educations found dude' })
    }
})

router.get('/showEducations:id', async (req, res) => {
    const educations = await EducationService.showEducations(req.params.id); 

    if (educations) {
        res.status(200).send(educations)
    } else {
        res.status(404).send({ error: 'no course with that id found' })
    }
})

module.exports = router;