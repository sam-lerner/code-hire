const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobQualification extends Model { }

JobQualification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        qualification_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'qualification',
                key: 'id',
            },
        },
        applicant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'job',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'job_qualification',
    }
),

    module.exports = JobQualification;