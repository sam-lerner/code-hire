// const router = require('express').Router();
// const {Comment} = require('../../models');

//   module.exports = router
const { Job,User,Comment } = require('../../models');
const router = require('express').Router();
// const {Job} = require('../../models');
// router.get("/", (req, res) => {
  
//   // fetch job data from the database using the jobId
//   res.render("companyReviewpage",);
// });


router.get('/:id', async (req, res) => {
  try{
    const jobId = await Job.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username','email'],
        },
        {
        model: Comment,
        attributes: ['comment'],}
      ]
    });
    if (!jobId) {
      res.status(404).json({ message: 'No job found with this id!' });
        return;
    }
    const jobs = jobId.get({ plain: true });
    console.log(jobs)
    res.render('companyReviewpage', {
        jobs
        
    });
  } catch (err) { 
    res.status(500).json(err);
  }});
module.exports = router