const CourseController = require('../courses/courses.service');
const PersonlController = require('../courses/courses.service');
const Education = require("./education.model");




module.exports = class EducationService {
    static async getCourses() {
      let courses = await CourseController.showCourses()
      const coursesResponse = await courses.json()
      console.log(coursesResponse)
      return coursesResponse
    }
    // static async getEducationTeacher() {
    //   let educationTeacher = await PersonalController.
    //   const educationTeacherResponse = await educationTeacher.json()
    //   let theEducationTeacher = educationTeacherResponse.body.educationTeacher
    //   console.log(theEducationTeacher)
    //   return theEducationTeacher
    // }
    static showEducations() {
      return Education.find();
  }
  static showEducation(id){
    return Education.findOne({_id: id});
  }
  
    static async Utbildning1Kurser() {
      let allCourses = await EducationService.getCourses()
      let allCoursesValue = allCourses.json()
      return allCoursesValue
    }
    };  