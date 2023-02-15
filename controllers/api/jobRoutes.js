const router = require('express').Router();
const { Job, User, Comment } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { withAuth, logRoutingInfo } = require('../../utils/helpers');

// GET all jobs
router.get('/',logRoutingInfo, async (req, res) => {
    try {
        const allJobs = await Job.findAll(
        )
        const jobs = allJobs.map((job) => job.get({plain: true}));
        res.render('allJobs', {jobs, loggedIn: req.session.loggedIn});

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/search',logRoutingInfo, async (req, res) => {
    // console.log("route search")
    // console.log(req.query)
    try {
        // retrieve the title from the query string
        const title = req.query.title;
        const location = req.query.location;
        const qualification = req.query.qualification;
        // query the database for jobs with matching title
        let results;
        if (title && location && qualification) {
            // This will look for both title and location
            results = await Job.findAll({
                where: {
                    title: { [Op.like]: `%${title}%` },
                    location: { [Op.like]: `%${location}%` },
                    qualification: { [Op.like]: `%${qualification}%` }
                }

            });
        }
        // If only title
        else if (title) {
            results = await Job.findAll({
                where: {
                    title: { [Op.like]: `%${title}%` }
                }

            });
        }
        else if (location) {
            results = await Job.findAll({
                where: {

                    location: { [Op.like]: `%${location}%` }
                }

            });
        }
        else if (qualification) {
            results = await Job.findAll({
                where: {

                    qualification: { [Op.like]: `%${qualification}%` }

                }

            });
        }
        
        console.log('location results are', results)
     
        const searchResults = results.map(result => {return result.get({plain:true})})
        console.log('resultData',searchResults)
        res.render('jobsearch', {
            searchResults
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;