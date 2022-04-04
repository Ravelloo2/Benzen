// CAMERONS
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

    static async showPersonal() {
        return Personal.find();
    }

    static showOnePersonal(id) {
        return Personal.findOne({ _id: id });
    }


    static async updatePersonal(id, body) {
        try {
            return await Personal.updateOne({_id: id}, {...body});
        } catch (error) {
            console.log(error);
        }
    }
    static async deletePersonal(id) {
        try {
            await Personal.findByIdAndDelete(id)
            return { status: 204 }
        } catch (error) {
            return { error: "Staff could not be found" }
        }
    }
};