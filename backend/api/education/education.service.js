const CourseController = require('../courses/courses.service');
// const PersonlController = require('../courses/courses.service');
const Education = require("./education.model");




module.exports = class EducationService {
  static async createEducation(body) {
    if (
      body.name &&
      body.educationLeader &&
      body.length &&
      body.place &&
      body.points &&
      body.courses &&
      body.description
    ) {
      const data = body;
      const education = new Education({
        name: data.name,
        educationLeader: data.educationLeader,
        length: data.length,
        place: data.place,
        points: data.points,
        courses: data.courses,
        description: data.description,
      });
      await education.save();
      return education;
    } else {
      return { error: "Fields can not be left blank." };
    }
  }
    static async getCourses() {
      let courses = await CourseController.showCourses()
      console.log(courses)
      return courses
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
    static async updateEducation(id, body){
      const updatedEducation = await Education.findOne({_id: id})
      if(updatedEducation) {
          if (body.name != null){
              updatedEducation.name = body.name
          } 
          if (body.educationLeader!= null){
              updatedEducation.educationLeader = body.educationLeader
          } 
          if (body.courses!= null) {
              updatedEducation.courses = body.courses
          }
          if (body.description!= null){
              updatedEducation.description = body.description
          }
          await updatedEducation.save();
      }
      return updatedEducation;
    } 
    static async deleteOneEducation(id) {
      try {
          await Education.findByIdAndDelete(id)
          return {status: 200}
      } catch (error) {
          return {error: "course could not be found"}
      }
    }
    };  