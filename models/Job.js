const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model { }

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // category: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // front_end: {
        //     type: DataTypes.TEXT,
        //     allowNull: true,
        // },
        // back_end: {
        //     type: DataTypes.TEXT,
        //     allowNull: true,
        // },
        // full_stack: {
        //     type: DataTypes.TEXT,
        //     allowNull: true,
        // },
        qualification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'job',
    }
);

module.exports = Job;