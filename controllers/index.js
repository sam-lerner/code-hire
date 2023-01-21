const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
<<<<<<< HEAD
const dashboardRoutes = require('./dashboardRoutes');
=======
const profileRoutes = require('./profile-routes');

>>>>>>> 62803ad6208b02cb978025938894a25e9777b71b

router.use('/', homeRoutes);

router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);

module.exports = router;