const router = require('express').Router();
const createacount = require('./createacount');
// const projectRoutes = require('./projectRoutes');

router.use('/createacount', createacount;
// router.use('/projects', projectRoutes);

module.exports = router;