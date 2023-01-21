const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// Sign Up

router.post('/', async (req, res) => {
  try{
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      is_employer: req.body.is_employer
    });
    // Session saved as logged in with created account
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.id = dbUserData.id;
      console.log(dbUserData.id);
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.id = userData.id;
      console.log(userData.id);
      req.session.loggedIn = true;
      console.log(
        'file: user-routes.js req.session.save req.session.cookie',
        req.session.cookie
      );

      console.log(req.session.id);

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// profile editor
router.put('/edit', async (req, res) => {
  try {
      const profileData = await User.update(
          {
              username:  req.body.name,
              github_link: req.body.github_link,
              linkedin_link: req.body.linkedin_link,
              profile: req.body.profile
          },
          {
              where: {
                  id: req.session.id
              }
          }
      );
      res.status(200).json(profileData);
  } catch(err) {
      console.log(err);
      res.status(500).json(err);
  }
});


module.exports = router;