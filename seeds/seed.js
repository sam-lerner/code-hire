const sequelize = require('../config/connection');
const {User, Job} = require('../models');

const jobData = require('./jobData.json')
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Job.bulkCreate(jobData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
