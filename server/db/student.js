const Sequelize = require('sequelize');
const db = require('./database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    imageURL: {
        type: Sequelize.TEXT,
        defaultValue: ''
    },
    gpa: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate:
        {
            isFloat: true,
            min: 0.0,
            max: 4.0
        }
    }
})