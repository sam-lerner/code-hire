const router = require('express').Router();
const {User, Job} = require('../../models')
const {withAuth, logRoutingInfo} = require('../../utils/helpers');

router.post('/', logRoutingInfo, withAuth, async (req, res) => {
    try {
        const jobData = await Job.create({
            title: req.body.title,
            location: req.body.location,
            salary: req.body.salary,
            body: req.body.body,
            qualification: req.body.qualification,
            user_id: req.session.user.id
        })
        res.status(200).json(jobData);
    } catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.delete('/:id', logRoutingInfo, withAuth, async (req, res) =>{
    try {
        const newJobData = await Job.destroy({
            where: {
            id: req.params.id}
        });

        // const job = newJobData.get({plain: true})

        res.json(newJobData);
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
    }
});


module.exports = router;