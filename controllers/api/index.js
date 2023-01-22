const router = require('express').Router();

const userRoutes = require('./user-routes');
// const profileRoutes = require('./editProfile-routes');
const jobRoutes = require('./jobRoutes')

router.use('/users', userRoutes);
// router.use('./edit', profileRoutes);
router.use('/job', jobRoutes);


module.exports = router;
