const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Investment = sequelize.define('investment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    coinPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    quantity: {
       type: Sequelize.DOUBLE,
       allowNull: false
    },
    createdAt: Sequelize.TIME,
});

module.exports = Investment;