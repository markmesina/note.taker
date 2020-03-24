const router = require('express').Router();

const notesApi = require('./notesApi');

// has '/api' prepended to every route
router.use('/notes', notesApi);

router.use('/notes/:id', notesApi);

module.exports = router;