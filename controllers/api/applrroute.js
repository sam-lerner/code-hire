const router = require('express').Router();
// const {Job} = require('../../models');
router.get("/", (req, res) => {
  
  // fetch job data from the database using the jobId
  res.render("apply-readMoreOfJobPost",);
});
module.exports = router