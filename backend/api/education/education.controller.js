const express = require("express");
const router = express.Router();
const Education = require('./education.model');
const EducationService = require('./education.service');



router.post('/Utbildning1', async (req,res) => {
    const Utbildning1 = new Education({
        name: 'Utbildning1',
        educationLeader: leader.id,
        courses: Utbildning1Kurser(),
        description: 'Denna utbildning är bra,ratead 87% på rotten tomatoes',
    })
    await Utbildning1.save()
    return Utbildning1
})
router.post('/Utbildning2', async (req,res) => {
    const Utbildning2 = new Education({
        name: 'Utbildning2',
        educationLeader: leader.id,
        courses: Utbildning1Kurser(),
        description: 'Denna utbildning är semi-bra,ratead 69% på rotten tomatoes',
    })
    await Utbildning2.save()
    return Utbildning2
})
router.post('/Utbildning3', async (req,res) => {
    const Utbildning3 = new Education({
        name: 'Utbildning3',
        educationLeader: leader.id,
        courses: Utbildning1Kurser(),
        description: 'Denna utbildning är ok,ratead 55% på rotten tomatoes',
    })
    await Utbildning3.save()
    return Utbildning3
})
router.post('/Utbildning4', async (req,res) => {
    const Utbildning4 = new Education({
        name: 'Utbildning4',
        educationLeader: leader.id,
        courses: Utbildning1Kurser(),
        description: 'Denna utbildning är inte bra,ratead 33% på rotten tomatoes',
    })
    await Utbildning4.save()
    return Utbildning4
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
    const course = await CourseService.showEducations(req.params.id);
    if(course){
        res.status(200).send(course);
    } else {
        res.status(404).send({error: 'no course with that id found.'})
    }
});

module.exports = router;

// static async getAllEducation(){
//     let utbildning1 = await fetch('http://localhost:3001/education/Utbildning1')
//     let utbildning1Response = await utbildning1.json()
//     let utbildning2 = await fetch('http://localhost:3001/education/Utbildning2')
//     let utbildning2Response = await utbildning2.json()
//     let utbildning3 = await fetch('http://localhost:3001/education/Utbildning3')
//     let utbildning3Response = await utbildning3.json()
//     let utbildning4 = await fetch('http://localhost:3001/education/Utbildning4')
//     let utbildning4Response = await utbildning4.json()

//     let AllEducation = []
//     AllEducation.push(utbildning1Response)
//     AllEducation.push(utbildning2Response)
//     AllEducation.push(utbildning3Response)
//     AllEducation.push(utbildning4Response)
//     return AllEducation
//   }