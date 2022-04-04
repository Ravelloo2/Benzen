// Eliaz Kod

const Apply = require('./ansoka.model')

module.exports = class ansokaService {
    static async createApplication(body) {
        if (body.Fname && body.Lname && body.Email && body.Utbildningar) {
            const data = body;
    
            const apply = new Apply({
                Fname: data.Fname,
                Lname: data.Lname,
                Email: data.Email,
                Utbildningar: data.Utbildningar,
            });
            await apply.save();
            return apply;
        } else {
            return { error: "Fields can not be left blank" }
        }
    }
}