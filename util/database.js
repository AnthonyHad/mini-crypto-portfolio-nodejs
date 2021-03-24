const Sequelize = require('sequelize');

const sequelize = new Sequelize('mini-crypto-nodejs', 'root', 'chopin123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;