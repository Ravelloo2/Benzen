const Personal = require("./personal.model");

module.exports = class CourseService {

  static async createPersonal(body) {
    if (body.fName && body.lName) {
      const data = body;

      const personal = new Personal({
        fName: data.fName,
        lName: data.lName,
      });
      await personal.save();
      return personal;
    } else {
      return { error: "Fields can not be left blank." };
    }
  }

  static showPersonal() {
      return Course.find();
  }

  static showCourse(id){
    return Personal.findOne({_id: id});
  }

  static async updateCourse(id, body){
    const personal = await Personal.findOne({_id: id})
    if(personal) {
        if (body.name){
            personal.name = body.name
        } 
        if (body.length) {
            personal.length = body.length
        }
        if (body.description){
            personal.description = body.description
        }
        await personal.save();
    }
    return personal;
  } 

  static async deletePersonal(id) {
    try {
        await Personal.findByIdAndDelete(id)
        return {status: 204}
    } catch (error) {
        return {error: "course could not be found"}
    }
  }
};
