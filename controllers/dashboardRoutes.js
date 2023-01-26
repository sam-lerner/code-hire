const router = require('express').Router();
const sequelize = require('../config/connection');
const { Job, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET Route for all employer Jobs
router.get('/', withAuth, async (req, res) => {
  console.log("Getting all posts on Dashboard.")
  try {
    const postData = await Job.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'body', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })

    const posts = postData.map((post) => post.get({ plain: true }));

    // res.status(200).json(postData);
    res.render('dashboard', {
      posts,
      logged_in: true,
      name: req.session.name,
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET Route for one user post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with that id' });
      return;
    }
    const post = dbPostData.get({ plain: true });
    console.log('sending ' + req.session.name);
    res.render('edit-post', {
      post,
      logged_in: true,
      name: req.session.name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for new post
router.get('/new', async (req, res) => {
  try {
    res.render('new-post', { name: req.session.name })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;