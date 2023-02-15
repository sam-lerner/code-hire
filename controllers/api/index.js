const router = require('express').Router();

const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const jobRoutes = require('./jobRoutes')
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/job', jobRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
