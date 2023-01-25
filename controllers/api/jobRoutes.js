const router = require('express').Router();
const { Job, User, Comment } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// const withAuth = require('../../utils/auth');

// GET all jobs
router.get('/', async (req, res) => {
    try {
        const allJobs = await Job.findAll({
            include: [
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
        res.status(200).json(allJobs);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/search', async (req, res) => {
    // console.log("route search")
    // console.log(req.query)
    try {
        // retrieve the title from the query string
        const title = req.query.title;
        const location = req.query.location;
        // query the database for jobs with matching title
        let results;
        if (title && location) {
            // This will look for both title and location
            results = await Job.findAll({
                where: {
                    title: { [Op.like]: `%${title}%` },
                    location: { [Op.like]: `%${location}%` }
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
        console.log('location results are', results)
        //   res.json(results);
        res.render('employeeSearchresults', {
            results
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one job
router.get('/:id', async (req, res) => {
    try {
        const oneJob = await Job.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        })
        if (!oneJob) {
            res.status(404).json({ message: 'No job found with that id!' })
            return
        }
        res.status(200).json(oneJob);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;