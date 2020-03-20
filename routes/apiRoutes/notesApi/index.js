const  router = require('express').Router();

const notesController = require('./../../../controller/notesController')

router.route('/')
    .get(notesController.getNotes)
    .post(notesController.createNotes)

module.exports = router;