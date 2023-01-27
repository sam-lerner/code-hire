const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../../models');
router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);//double hashing


        req.body.password = hashedPassword;
        const isEmployer = req.body["account-type"] === "employer" ? true : false;
        req.body.is_employer = isEmployer;

        const userData = await User.create(req.body);
        console.table(req.body);
        req.session.save(() => {

            req.session.username = userData.username;
            req.session.email = userData.email;
            req.session.logged_in = true;
            res.status(201).json({ message: `Successfully created ${userData.username}` });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or passwordwrwrwr, please try again' });

            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.name = userData.name;
            req.session.logged_in = true;
            if (User.is_employer) {
                res.render('employerProfile', { User: user.username, });
            } else {
                res.render('employeeProfilePage', { User: user });
            }

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

// router.post('/login', async (req, res) => {
//     console.log(req.body.username);
//     try {
//         const { username, password } = req.body;
//         // Find the user with the provided username
//         const user = await User.findOne({ where: { username:username } });

//         // If no user is found with the provided username, return an error
//         if (!user) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         // Compare the provided password with the hashed password in the database
//         const isMatch = await bcrypt.compare(password, user.password);

//         // If the passwords do not match, return an error
//         if (!isMatch) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         // If the login is successful, create a session for the user
//         req.session.save(() => {
//             req.session.user_id = user.id;
//             req.session.username = user.username;
//             req.session.email = user.email;
//             req.session.logged_in = true;
//             if (user.is_employer) {
//                 res.render('employerProfile', {User:user.username, });
//             } else {
//                 res.render('employeeProfilePage', {User:user});
//             }
//             res.status(200).json({ message: `Welcome ${user.username}` });
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;  
