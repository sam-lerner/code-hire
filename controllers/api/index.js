const router = require('express').Router();

const userRoutes = require('./user-routes');
// const profileRoutes = require('./editProfile-routes');
const loginOrCreateAcount = require('./login-createacount')

router.use('/users', userRoutes);
// router.use('./edit', profileRoutes);
router.use('/login',loginOrCreateAcount);

module.exports = router;
