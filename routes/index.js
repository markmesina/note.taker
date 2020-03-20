const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');


//Route here matches "/"
router.use('/', htmlRoutes);
//prepends '/api' to routes declared
// router.use('/api', apiRoutes);

module.exports = router;