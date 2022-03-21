const express = require("express");
const router = express.Router();
const Education = require('./education.model');
const EducationService = require('./education.service');



router.post('/Utbildning1', async (req,res) => {
    const Utbildning1 = new Education({
        name: 'Utbildning1',
        educationLeader: 'Test',
        courses: 'test',
        description: 'Denna utbildning är bra,ratead 87% på rotten tomatoes',
    })
    await Utbildning1.save()
    res.status(200).send(Utbildning1)
})
router.post('/Utbildning2', async (req,res) => {
    const Utbildning2 = new Education({
        name: 'Utbildning2',
        educationLeader: 'test',
        courses: 'test',
        description: 'Denna utbildning är semi-bra,ratead 69% på rotten tomatoes',
    })
    await Utbildning2.save()
})
router.post('/Utbildning3', async (req,res) => {
    const Utbildning3 = new Education({
        name: 'Utbildning3',
        educationLeader: 'test',
        courses: 'test',
        description: 'Denna utbildning är ok,ratead 55% på rotten tomatoes',
    })
    await Utbildning3.save()
})
router.post('/Utbildning4', async (req,res) => {
    const Utbildning4 = new Education({
        name: 'Utbildning4',
        educationLeader: 'test',
        courses: 'test',
        description: 'Denna utbildning är inte bra,ratead 33% på rotten tomatoes',
    })
    await Utbildning4.save()
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
