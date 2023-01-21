const router = require('express').Router();
const {User} = require('../../models');

router.put('/', async (req, res) => {
    try {
        const profileData = await User.update(
            {
                username:  req.body.name,
                github_link: req.body.github_link,
                linkedin_link: req.body.linkedin_link,
                profile: req.body.profile
            },
            {
                where: {
                    id: req.session.id
                }
            }
        );
        res.status(200).json(profileData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;