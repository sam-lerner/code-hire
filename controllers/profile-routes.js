const router = require('express').Router();
const {User} = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.session.id,
            {
            attributes: ['email' , 'github_link']
            });

        // const users = dbUserData.map((user) => user.get({ plain: true}));
        const users = dbUserData.get({plain: true});

        

        res.render('profile', {
            users,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;