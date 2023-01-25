const router = require('express').Router();
const { Job,JobQualification, UserQualification, User } = require('../models');

function logRoutingInfo(req,res,next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

// GET data from Job table, render them through homepage.handlebar
router.get('/', logRoutingInfo, async (req, res) => {
    try {
        const jobData = await Job.findAll()

        const jobs = jobData.map((job) => 
            job.get({plain: true})
        );

        console.log(jobs);
        const jobsFour = jobs.filter((jobs,index)=>{
            console.log(index)
            return index < 4;
        })
        console.log(jobsFour)
        res.render('homepage', {jobsFour, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});


// router.get('/', async (req, res) => {
//     try {
//         const jobData = await Job.findAll()

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

// GET conditional login page through href in main.handlebar
router.get('/login',logRoutingInfo, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
});

router.get('/edit',logRoutingInfo, (req, res) => {
    // if(!req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('edit', {loggedIn: req.session.loggedIn});
});


module.exports = router;