const router = require('express').Router();
const {withAuth, logRoutingInfo} = require('../utils/helpers');
const {User, Job, Comment} = require('../models');


router.get('/', logRoutingInfo, async (req, res) => {
    try {
        const jobData = await Job.findAll()

        const jobs = jobData.map((job) => 
            job.get({plain: true})
        );

        // console.log(jobs);
        const jobsFour = jobs.filter((jobs,index)=>{
            // console.log(index)
            return index < 4;
        })

        res.render('homepage', {jobsFour, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// GET conditional login page through href in main.handlebar
router.get('/login', logRoutingInfo, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
});


router.get('/signup', logRoutingInfo, async (req, res) => {
    res.render('signup', {loggedIn: req.session.loggedIn});
});

router.get('/profile', logRoutingInfo, withAuth, async (req, res) => {

    const newUserData = await User.findByPk(req.session.user.id,{
        attributes: {exclude : ['password']},
        include: {
            model: Job,
            attributes: {exclude: ['category']},
        }
    })

    const users = newUserData.get({plain : true})

    res.render('profile', { users, user: req.session.user , loggedIn: req.session.loggedIn});

});


router.get('/job/:id', logRoutingInfo, async (req, res) => {
    try {
        const oneJob = await Job.findOne({
            where: {id : req.params.id},
            attributes: ['id', 'title', 'location', 'body', 'salary', 'qualification', 'user_id'],
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName', 'email']
                },
                {
                    model: Comment,
                    attributes: ['id', 'content', 'createdAt', 'user_id', 'job_id'],
                    include:
                        {
                            model: User,
                            attributes: ['firstName', 'lastName', 'email']
                        }
                }
            ]
        })

        const job = oneJob.get({plain: true});




        res.render('oneJob', {job, loggedId: req.session.id, loggedUser: req.session.user, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;

