const router = require('express').Router();
// const review = require('./commentR')
const userRoutes = require('./user-routes');
// const profileRoutes = require('./editProfile-routes');
const loginOrCreateAcount = require('./login-createacount');
const jobRoutes = require('./jobRoutes');

router.use('/users', userRoutes);
// router.use('./edit', profileRoutes);
router.use('/login',loginOrCreateAcount);router.use('/job', jobRoutes);
// router.use('/reviews',review);


module.exports = router;
