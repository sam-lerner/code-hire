const { User } = require('../models');

const userData = [
    {
        id: 1,
        firstName: "Sal",
        lastName: "One",
        email: "sal@hotmail.com",
        password: "password",
        github: "github.com",
        linkedin: "linkedin.com",
        about: "Hi I'm Sal",
        skills: "Full Stack",
        // front_end: false,
        // back_end: false,
        // full_stack: true,
        is_employer: false
      },
      {
        id: 2,
        firstName: "Lernantino",
        lastName: "Two",
        email: "lernantino@gmail.com",
        password: "password",
        github: "github.com",
        linkedin: "linkedin.com",
        about: "Hi I'm Lernantino",
        skills: "Back End",
        // front_end: false,
        // back_end: true,
        // full_stack: false,
        is_employer: false
      },
      {
        id: 3,
        firstName: "Amiko",
        lastName: "Three",
        email: "amiko2k20@aol.com",
        password: "password",
        github: "github.com",
        linkedin: "linkedin.com",
        about: "Hi I'm Amiko",
        skills: "N/A (Employer)",
        // front_end: true,
        // back_end: false,
        // full_stack: false,
        is_employer: true
      },
      {
        id: 4,
        firstName: "Jordan",
        lastName: "Four",
        email: "jordan99@msn.com",
        password: "password",
        github: "github.com",
        linkedin: "linkedin.com",
        about: "Hi I'm Jordan",
        skills: "Full Stack",
        // front_end: false,
        // back_end: false,
        // full_stack: false,
        is_employer: false
      },
      {
        id: 5,
        firstName: "Blake",
        lastName: "Five",
        email: "the_blake@yahoo.com",
        password: "password",
        github: "github.com",
        linkedin: "linkedin.com",
        about: "Hi I'm Blake",
        skills: "N/A (Employer)",
        // front_end: false,
        // back_end: false,
        // full_stack: true,
        is_employer: true
      }
];

const seedUser = async () => {
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
};

module.exports = seedUser;