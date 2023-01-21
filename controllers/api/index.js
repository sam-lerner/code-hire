const router = require('express').Router();

const userRoutes = require('./user-routes');
// const profileRoutes = require('./editProfile-routes');


router.use('/users', userRoutes);
// router.use('./edit', profileRoutes);

router.use('/jobs', jobRoutes);

module.exports = router;
