// const router = require('express').Router();
// const {Comment} = require('../../models');
// router.post('/', withAuth, async (req, res) => {
//     try {
//       const commentData = await Comment.create({
//           comment: req.body.comment,
//           id: req.session.id,
//           job_id: req.body.job_id
//       })
//       res.json(commentData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
//   module.exports = router