const { Job } = require('../models');

const jobData = [
    {   
        id: 1,
        title: "job title 1",
        body : "job description 1",
        salary: "$1",
        category: "category 1",
        location: "location 1",
        qualification: "Full Stack",
        user_id: 3,
    },
    {
        id: 2,
        title: "job title 2",
        body: "job description 2",
        salary: "$2",
        category: "category 2",
        location: "location 2",
        qualification: "Back End",
        user_id: 3,
    },
    {
        id: 3,
        title: "job title 3",
        body : "job description 3",
        salary: "$3",
        category: "category 3",
        location: "location 3",
        qualification: "Front End",
        user_id: 3,
    },
    {
        id: 4,
        title: "job title 4",
        body : "job description 4",
        salary: "$4",
        category: "category 4",
        location: "location 4",
        qualification: "Full Stack",
        user_id: 5,
    },
    {
        id: 5,
        title: "job title 5",
        body : "job description 5",
        salary: "$5",
        category: "category 5",
        location: "location 5",
        qualification: "Full Stack",
        user_id: 5,
    },
    {
        id: 6,
        title: "Pizza Guy",
        body : "job description 4",
        salary: "$4",
        category: "category 4",
        location: "San Diego",
        qualification: "Front End",
        user_id: 3
    },
    {
        id: 7,
        title: "Pizza maker",
        body : "job description 4",
        salary: "$4",
        category: "category 4",
        location: "San Francisco",
        qualification: "Back End",
        user_id: 3
    },   
    {
        id: 8,
        title: "Taco enthusiast",
        body : "job description 4",
        salary: "$4",
        category: "category 4",
        location: "San Francisco",
        qualification: "Full Stack",
        user_id: 5,
    },
];

const seedJob = () => Job.bulkCreate(jobData);

module.exports = seedJob;