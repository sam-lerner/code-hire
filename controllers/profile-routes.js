const router = require('express').Router();
const {User, Job} = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.id,
            {
            attributes: ['email' , 'github_link']
            });

        const users = userData.map((user) => user.get({ plain: true}));
        // const users = userData.get({plain: true});
        
        
        // find 
        const userJobData = await Job.findAll({
            where: {
              id: req.session.id,
            },
            attributes: [''],
            include: [{
              model: User,
              attributes: [''],
            },
            {  
              model: Job,
              attributes: [''],
            }
            ],
            order:[
              ['date_created','DESC' ]
            ]
      
          });
        

        const jobs = userJobData.map((job) => job.get({ plain: true}));  

        res.render('profile', {
            users,
            jobs,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;