const Personal = require("../models/personalModel");

exports.listAllPersonal = (req, res) => {
    Personal.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

exports.createNewTodo = (req, res) => {
    let newPersonal = new Personal(req.body);
    newPersonal.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};

exports.updatePersonal = (req, res) => {
    Personal.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};


exports.deletPersonal = async (req, res) => {
    try {
        await Personal.deleteOne({ _id: req.params.id }, { $set: { status: "inactive"}});
        res.status(200).json({message: "Personal was fkn sparkad successfully!"});
      } catch (error) {
        res.status(500).json({error:'There was a Server Side Error'})
      };
};