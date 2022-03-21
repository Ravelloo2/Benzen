const Apply = require('./ansoka.model')

module.exports = class ansokService {
    static async createApplication(body) {
        if(body.Fname && body.Lname && body.Mail && body.Utbildningar) {
            const data = body

            const application = new Apply({
                Fname: data.Fname,
                Lname: data.Lname,
                Mail: data.Mail,
                Utbildningar: data.Utbildningar,
            });
            await application.save()
            return application;
        } else {
            return { error: "Fält kan inte lämnas tomma" }
        }
    }
}