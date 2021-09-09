
// const sequelize = require('../config/connection');
const { User } = require('../models/User');

const userdata = [
    {
        username: 'max',
        email: 'max@email.ca',
        password: 'password123'
    },
    {
        username: 'kyle',
        email: 'kyle@email.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;