/* Jontes */
const CourseController = require('../courses/courses.service');
const PersonalController = require('../personal/personal.service');
const Education = require("./education.model");



module.exports = class EducationService {

  //Skapa Utbildning
  static async createEducation(body) {
    if (body.name &&body.educationLeader && body.length && body.place && body.points && body.courses && body.description) {
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
  //Hämta kurser från Petra
    static async getCourses() {
      let courses = await CourseController.showCourses()
      console.log(courses)
      return courses
    }
    //Hämta Personal från Cameron
    static async getPersonal() {
      let personal = await PersonalController.showPersonal()
      console.log(personal)
      return personal
    }

    //Hämta utbildningar som finns i databasen
    static showEducations() {
      return Education.find();
  }

  //Hämta en utbildning som finns i databasen
  static showEducation(id){
    return Education.findOne({_id: id});
  }

  //uppdatera utbildning som finns i databasen
    static async updateEducation(id, body){
      try {
        return await Education.updateOne({_id: id}, {...body});
    } catch (error) {
        console.log(error);
    }
  }
     
   //deleta en utbildning som finns i databasen
    static async deleteOneEducation(id) {
      try {
          await Education.findByIdAndDelete(id)
          return {status: 200}
      } catch (error) {
          return {error: "education could not be found"}
      }
    }
    };  

    // Delete alla educations finns direkt i controller