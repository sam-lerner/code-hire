const sequelize = require('../config/connection');
const seedJob = require('./job');
const seedUser = require('./user');

const seedData = async () => {
    
    await sequelize.sync({ force: true});
    
    await seedUser();
    await seedJob();

    process.exit(0);

};

seedData();