const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserQualification extends Model { }

UserQualification.init(
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
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_qualification',
    }
),

    module.exports = UserQualification;