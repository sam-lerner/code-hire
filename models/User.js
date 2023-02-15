const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            }
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            }
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        skills: {
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
        is_employer: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
