const express = require("express");
const router = express.Router();
const CourseService = require("./courses.service");

router.post('/createCourse', async (req, res) => {
  const course = await CourseService.createCourse(req.body);
  if (!course.error) {
    res.status(200).send(course);
  } else {
    res.status(401).send({ error: "bad input" });
  }
});

router.get('/showCourses' , async (req, res) => {
  const courses = await CourseService.showCourses();
  if (courses.length >= 1) {
    res.status(200).send(courses);
  } else {
    res.status(404).send({ error: "no courses found" });
  }
});

router.get("/showCourse/:id", async (req, res) => {
  const course = await CourseService.showCourse(req.params.id);
  if (course) {
    res.status(200).send(course);
  } else {
    res.status(404).send({ error: "no course found with matching id." });
  }
});

router.patch("/updateCourse/:id", async (req, res) => {
  const course = await CourseService.updateCourse(req.params.id, req.body);
  if (course) {
    res.status(200).send(course);
  } else {
    res.status(404).send({ error: "no course found with matching id." });
  }
});

router.delete("/deleteCourse/:id", async (req, res) => {
  const course = await CourseService.deleteCourse(req.params.id);
  if (!course.error) {
    res.status(204).send();
  } else {
    res.status(404).send({ error: "Course with given id doesn't exist" });
  }
});

module.exports = router;
