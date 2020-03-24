const db = require('./../models/db.json');

module.exports = {
    getNotes: (req, res) => {
        res.json(db);
    },
    createNotes: (req, res) => {
        const newNotes = req.body;
        const id = 0;
        db.push(newNotes);
        assignID();
        res.json(db);
        console.log(db);
    },
    deleteNote: (req, res) => {
        console.log(req.params.id);
        const noteID = req.params.id;
        db.splice(noteID, 1);
        assignID();
        res.json(db);
        console.log(`Deleting note with ID ${noteID}`);

    }
}
function assignID() {
    for (i = 0; i < db.length; i++) {
        db[i].id = i;
    }
};