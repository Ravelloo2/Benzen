const Course = require("./courses.model");

module.exports = class CourseService {

  static async createCourse(body) {
    if (body.name && body.length && body.description) {
      const data = body;

      const course = new Course({
        name: data.name,
        length: data.length,
        description: data.description,
      });
      await course.save();
      return course;
    } else {
      return { error: "Fields can not be left blank." };
    }
  }

  static showCourses() {
      return Course.find();
  }

  static showCourse(id){
    return Course.findOne({_id: id});
  }

  static async updateCourse(id, body){
    const course = await Course.findOne({_id: id})
    if(course) {
        if (body.name){
            course.name = body.name
        } 
        if (body.length) {
            course.length = body.length
        }
        if (body.description){
            course.description = body.description
        }
        await course.save();
    }
    return course;
  } 

  static async deleteCourse(id) {
    try {
        await Course.findByIdAndDelete(id)
        return {status: 204}
    } catch (error) {
        return {error: "course could not be found"}
    }
  }
};
