const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./hompage');

router.use('/', homepage);
router.use('/api', apiRoutes);

module.exports = router;