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
      try {
        const education = await Education.findOne({ _id: id });
        if (education) {
          if (body.name) {
            education.name = body.name;
          }
          if (body.educationLeader) {
            education.educationLeader = body.educationLeader;
          }
          if (body.length) {
            education.length = body.length;
          }
          if (body.place) {
            education.place = body.place;
          }
  
          if (body.points) {
            education.points = body.points;
          }
          if (body.courses) {
            education.courses = body.courses;
          }
          if (body.description) {
            education.description = body.description;
          }
          await education.save();
        }
        return education;
      } catch (error) {
        console.log(error);
      }}

    static async deleteOneEducation(id) {
      try {
          await Education.findByIdAndDelete(id)
          return {status: 200}
      } catch (error) {
          return {error: "education could not be found"}
      }
    }
    };  