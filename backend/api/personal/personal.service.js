const CourseService = require("../courses/courses.service");
const Personal = require("./personal.model");

module.exports = class PersonalService {
    static async createPersonal(body) {
        if (body.fName && body.lName && body.email && body.bKonto) {
            const data = body;

            const personal = new Personal({
                fName: data.fName,
                lName: data.lName,
                email: data.email,
                bKonto: data.bKonto,
            });
            await personal.save();
            return personal;
        } else {
            return { error: "Fields can not be left blank" }
        }
    }

    static showPersonal() {
        return Personal.find();
    }

    static showPersonal(id){
        return Personal.findOne({_id: id});
    }

    static async updatePersonal(id, body){
        const personal = await CourseService.findOne({_id: id})
        if(personal) {
            if (body.fName){
                personal.fName = body.fName
            }
            if (body.lName){
                personal.lName = body.lName
            }
            if (body.email){
                personal.email = body.email
            }
            if (body.bKonto){
                personal.bKonto = body.bKonto
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
            return {error: "Staff could not be found"}
        }
    }
};