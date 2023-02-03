const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes');
const jobpost = require('./singlePost')
router.use('/', homeRoutes);

router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use("/jobpost",jobpost);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;