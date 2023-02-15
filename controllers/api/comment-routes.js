const router = require('express').Router();
const { Job, User, Comment } = require('../../models');
const { withAuth, logRoutingInfo } = require('../../utils/helpers');

router.post('/',logRoutingInfo, async (req, res) => {
    try{
        const newCommentData = await Comment.create({
            content: req.body.content,
            job_id: req.body.job_id,
            user_id: req.session.user.id,
        })
        res.status(200).json(newCommentData);
    } catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;