const router = require('express').Router();
const { Job,User } = require('../models');
// const {Job} = require('../../models');
// router.get("/", (req, res) => {
  
    
  

//   // fetch job data from the database using the jobId
//   res.render("apply-readMoreOfJobPost",);
// });

// router.get('/:id' ,async (req, res) => {
//  Job.findAll( req.params.user_id,{
//     include: [
//       {
//           model: User,
//           attributes: ['username']
//       }
//     ]
//   })
//      .then(dbJobData => {
//        const jobs = dbJobData.map(job => job.get({ plain: true }));

//       res.render('single-post', {
//         jobs
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });

router.get('/:id', async (req, res) => {
try{
  const jobId = await Job.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      }
    ]
  });
  if (!jobId) {
    res.status(404).json({ message: 'No job found with this id!' });
      return;
  }
  const jobs = jobId.get({ plain: true });
  res.render('single-post', {
      jobs
  });
} catch (err) { 
  res.status(500).json(err);
}});


//   console.log(jobId)
//   Job.findByPk({
//     where: { id: req.params.id },
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(jobs=> {
//       res.render('single-post', {
//        jobs
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
//   try {
//     const jobData = await Job.findAll(req.params.id, {
//       include: [
//         User,
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//   });

// console.log(jobData)
//     if (jobData) {
//       const jobs= jobData.map((job) => job.get({ plain: true }));
//     //   res.render('single-post', { singlePost });
//       res.render('single-post',{jobs} );

//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router