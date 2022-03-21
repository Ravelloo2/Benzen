module.exports = function(app) {
    var personalList = require('../controllers/personalController');

    app
    .route("/personal")
    .get(personalList.listAllPersonal)
    .post(PersonalList.createNewPersonal);

    app
    .route("/personal/:id")
    .put(personalList.updatePersonal)
    .delete(personalList.deletePersonal);
};