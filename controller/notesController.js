const models = require('./../models/db.json');

module.exports = {
    getNotes: (req,res) => {
        res.json(models);
    },
    createNotes: (req,res) => {

    },
}