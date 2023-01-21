const User = require('./User');
const Job = require('./Job');
const Comment = require('./Comment');
const Qualification = require('./Qualification');
const JobQualification = require('./JobQualification');
const UserQualification = require('./UserQualification');

// // Job has one user
Job.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Job, {
    foreignKey: 'user_id'
});

// // Comments belong to both Jobs and Users

Comment.belongsTo(Job, {
    foreignKey: 'job_id',
});
Job.hasMany(Comment, {
    foreignKey: 'job_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

// Qualifications belong to both Users and Jobs through qualification tables

User.belongsToMany(Qualification, {
    through: {
        model: UserQualification,
        unique: false,
    },
    as: 'users_qualifications',
});

Qualification.belongsToMany(User, {
    through: {
        model: UserQualification,
        unique: false,
    },
    as: 'qualifications_by_user',
});

Job.belongsToMany(Qualification, {
    through: {
        model: JobQualification,
        unique: false,
    },
    as: 'jobs_qualifications',
});

Qualification.belongsToMany(Job, {
    through: {
        model: JobQualification,
        unique: false,
    },
    as: 'qualifications_by_jobs',
});

module.exports = {
    User,
    Job,
    Comment,
    Qualification,
    JobQualification,
    UserQualification,
};