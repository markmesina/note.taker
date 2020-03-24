const  router = require('express').Router();

const notesController = require('./../../../controller/notesController')

//prepends '/api'
router.route('/')
    .get(notesController.getNotes)
    .post(notesController.createNotes)
    // .delete(notesController.deleteNote);

    //prepends '/api/:'
router.route('/:id')
    .delete(notesController.deleteNote)

module.exports = router;