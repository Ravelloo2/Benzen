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
    if(showEducation){
        res.status(200).send(showEducation);
    } else {
        res.status(404).send({error: 'no education found'})
    }
});
router.get('/AllEducation/:id', async (req, res) => {
    const showOneEducation = await EducationService.showEducations(req.params.id);
    if(showOneEducation){ 
        res.status(200).send(showOneEducation);
    } else {
        res.status(404).send({error: 'no education with that id found.'})
    }
});

module.exports = router;
