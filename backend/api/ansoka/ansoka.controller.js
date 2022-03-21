const express = require('express');
const router = express.Router();
const Apply = require('./ansoka.model')
const AnsokaService = require('./ansoka.service')

router.post('/createApplication', async (req, res) => {
    const application = await AnsokaService.createApplication(req.body);
    if (!application.error) {
        res.status(200).send(application);
    } else {
        res.status(401).send({ error: 'bad input' })
    }
})