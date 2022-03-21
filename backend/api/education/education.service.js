const Education = require("./education.model");




module.exports = class EducationService {
  static async getCourses() {
    let courses = await fetch("http://localhost:3001/course/showCourses")
    const coursesResponse = await courses.json()
    console.log(coursesResponse)
    return coursesResponse
  }
  static async getEducationTeacher() {
    let educationTeacher = await fetch("http://localhost:3001/course/showCourses")
    const educationTeacherResponse = await educationTeacher.json()
    let theEducationTeacher = educationTeacherResponse.body.educationTeacher
    console.log(theEducationTeacher)
    return theEducationTeacher
  }


    static async getEducation() {
      try {
        const education = await Education.find()
        res.json(education)
    }
    catch (err) {
    res.status(500).json({message: err.message})
    }
        
      }

        static async fullEducation(){
          const fullEducation = new Education({
            name: getEducationTeacher(),
            educationLeader: String,
            courses: getCourses(),
            description: String,
          })
          await fullEducation.save()
          return fullEducation
          
        }

  };    