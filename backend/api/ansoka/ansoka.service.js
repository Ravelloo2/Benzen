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

    static async showApplication() {
        return Apply.find();
    }

    static async showOneApplication(id) {
        return await Apply.findById({ _id: id });
    }

    static async updateApplication(id, body){
        try {
          return await Apply.updateOne({_id: id}, {...body});
      } catch (error) {
          console.log(error);
      }
    }

    static async deleteApplication(id) {
        try {
            await Apply.findByIdAndDelete(id)
            return { status: 204 }
        } catch (error) {
            return { error: "Applcation was not found!" }
        }
    }
}