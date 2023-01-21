const router = require('express').Router();
const { Job,JobQualification, UserQualification, User } = require('../models');

// GET data from Job table, render them through homepage.handlebar
// router.get('/', async (req, res) => {
//     try {
//         const jobData = await post.findAll()

//         const jobs = jobData.map((job) => 
//             job.get({plain: true})
//         );

//         console.log(jobs);
//         res.render('homepage', {jobs, loggedIn: req.session.loggedIn});
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     };
// });


router.get('/', async (req, res) => {
    try {
        const jobData = await Job.findAll()

        const jobs = jobData.map((job) => 
            job.get({plain: true})
        );

        console.log(jobs);
        res.render('homepage', {jobs, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// GET conditional login page through href in main.handlebar
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
});

router.get('/edit', (req, res) => {
    // if(!req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('edit', {loggedIn: req.session.loggedIn});
});


module.exports = router;