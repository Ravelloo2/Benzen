/*PETRAS*/
const Course = require("./courses.model");

module.exports = class CourseService {
  static async createCourse(body) {
    if (
      body.name &&
      body.description &&
      body.length &&
      body.startDate &&
      body.location &&
      body.teacherId
    ) {
      const data = body;

      const course = new Course({
        name: data.name,
        description: data.description,
        length: data.length,
        startDate: data.startDate,
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
      const course = await Course.findOne({ _id: id });
      if (course) {
        if (body.name) {
          course.name = body.name;
        }
        if (body.description) {
          course.description = body.description;
        }
        if (body.length) {
          course.length = body.length;
        }
        if (body.startDate) {
          course.startDate = body.startDate;
        }

        if (body.location) {
          course.location = body.location;
        }
        if (body.teacherId) {
          course.teacherId = body.teacherId;
        }
        await course.save();
      }
      return course;
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
