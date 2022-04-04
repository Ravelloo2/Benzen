/*PETRAS*/
const Course = require("./courses.model");

module.exports = class CourseService {
  static async createCourse(body) {
    if (
      body.name &&
      body.description &&
      body.length &&
      body.startDate &&
      body.points &&
      body.location &&
      body.teacherId
    ) {
      const data = body;

      const course = new Course({
        name: data.name,
        description: data.description,
        length: data.length,
        startDate: data.startDate,
        points: data.points,
        location: data.location,
        teacherId: data.teacherId,
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

  static showCourse(id) {
    return Course.findOne({ _id: id });
  }

  static async updateCourse(id, body) {
    try {
      return await Course.updateOne({_id: id}, {...body});
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCourse(id) {
    try {
      await Course.findByIdAndDelete(id);
      return { status: 204 };
    } catch (error) {
      return { error: "course could not be found" };
    }
  }
};
