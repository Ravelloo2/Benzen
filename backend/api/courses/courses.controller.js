const express = require("express");
const router = express.Router();
const CourseService = require('./courses.service');
const CourseServiceInstance = new CourseService();


router.post('/createCourse', async (req, res) => {
    try {
        const newCourse = await CourseServiceInstance.create(req.body);
        res.send(newCourse);  
      } catch (error) {
            res.status(500).send({error: "Whoops, something went wrong!"});
      }
});

router.get('/findCourses', async (req, res) => {
    try {
        const courses = await CourseServiceInstance.findAll();
        return res.send(courses);  
      } catch (error) {
          res.status(404).send({error: "There are no courses in the database yet!"});
      }
  });

router.get('/course/:id', async (req, res) => {
    try {
        const course = await CourseServiceInstance.findOne(req.params.id)
        return res.send(course);  
      } catch (error) {
          res.status(404).send({error: "Course doesn't exist!"});
      }
});
router.patch('/course/:id', async (req, res) => {
    try {
        const newCourse = await CourseServiceInstance.update(req.params.id, req.body);
        return res.send(newCourse);  
      } catch (error) {
          res.status(404).send({error: "Course doesn't exist!"});
      }
});
router.delete('/course/:id', async (req, res ) => {
    try {
        await CourseServiceInstance.deleteOne(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).send({error: "Course doesn't exist!"})
    }
})

module.exports = router;