const router = require('express').Router();
const { Job,JobQualification, UserQualification, User } = require('../models');

// GET data from Job table, render them through homepage.handlebar
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


// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const jobData = await Project.findAll({
//       include: [
//         {
//           model: JobQualification
        
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const jobs = jobData.map((job) => job.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       jobs, 
      
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/job/:id', async (req, res) => {
//   try {
//     const jobData = await Job.findByPk(req.params.id, {
//       include: [
//         {
//           model: JobQualification
        
//         },
//       ],
//     });

//     const jobs = jobData.get({ plain: true });

//     res.render('jobs', {
//       ...job,
      
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: UserQualification, model: User }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login-createacount', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//     //else create acount redirect to create acount 
//   }

//   res.render('login-createacount');
// });

module.exports = router;