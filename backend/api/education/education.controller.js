const express = require("express");
const router = express.Router();
const Education = require('./education.model');
const EducationService = require('./education.service');


router.post('/CreateEducation', async (req,res) => {

})

router.get('/AllEducation', async (req, res) => {
    const education = await EducationService.fullEducation();
    if(education){
        res.status(200).send(education);
    } else {
        res.status(404).send({error: 'no courses found'})}
});

router.get('/AllEducation/:id', async (req, res) => {

});

module.exports = router;