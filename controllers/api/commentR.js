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
// router.post('/:id', (req, res) => {
//   const commentData = {
//     comment: req.body.comment,
//     job_title: req.body.job_title,
//     job_id: req.params.id,
//     user_id: req.session.user_id,
//   };

//   Job.findByPk(req.params.id)
//     .then(job => {
//       return Comment.create(commentData)
//         .then(comment => {
//           return job.addComment(comment);
//         });
//     })
//     .then(() => res.sendStatus(200))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// });
router.post('/:id', (req, res) => {
  // create a new category
  Comment.create({
    comment: req.body.comment,
        job_title: req.body.job_title,
   job_id: req.params.id,
  user_id: req.session.user_id,
  })
  .then(categoryDB => res.json(categoryDB))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

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
    console.log('jobs data:',jobs)
    res.render('companyReviewpage', {
        jobs
        
    });
  } catch (err) { 
    res.status(500).json(err);
  }});
module.exports = router