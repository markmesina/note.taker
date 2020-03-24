const db = require('./../models/db.json');

module.exports = {
    getNotes: (req,res) => {
        res.json(db);
    },
    createNotes: (req,res) => {
         const newNotes = req.body;
         const id = 0;
        //  newNotes.id = id +1;
            db.push(newNotes);
            function assignID() {
                for (i = 0; i < db.length; i ++) {
                    db[i].id = i;
                }
            };
            assignID();
            res.json(db);
        console.log(db);
    },
    // // deleteNote: (req,res) => {
    // //     console.log(req.params.id);
    // //     const noteID = req.params.id;
    // //     let newID = 0;
    // //     console.log(`Deleting note with ID ${noteID}`);
    // //     newNotes = newNotes.filter(currNoted => {
    // //         return currNoted.id != noteID;
    // //     })
    // }
}