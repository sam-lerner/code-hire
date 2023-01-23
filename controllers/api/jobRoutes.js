const router = require('express').Router();
const { Job, User, Comment } = require('../../models');
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


// GET all jobs that match search criteria
// router.get('/', async (req, res) => {
//     try {
//         const { jobTitle, jobLocation } = req.query;
//         console.log(req.query)
//         const results = await Job.findAll({
//             where: {
//                 title: { [Op.like]: `%${jobTitle}%` },
//                 location: { [Op.like]: `%${jobLocation}%` }
//             }
//         });

//         // Handle the search results
//         if (results.length === 0) {
//             alert("No jobs found matching your search criteria");
//         } else {
//             // Render the search results to the page
//            res.json(results);
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/search', async (req, res) => {
    console.log("route search")
    try {
      // retrieve the title from the query string
      const title = req.query.title;
      // query the database for jobs with matching title
      const results = await Job.findAll({
        where: { title: { [Op.like]: `%${title}%` } }
      });
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