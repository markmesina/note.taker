const db = require('./../models/db.json');

module.exports = {
    getNotes: (req,res) => {
        res.json(db);
    },
    createNotes: (req,res) => {
         const newNotes = req.body;
            db.push(newNotes);
         res.json(newNotes);

    },
}