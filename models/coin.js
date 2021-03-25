const Sequelize = require('sequelize');

const sequelize = require("../util/database");


const Coin = sequelize.define('coin', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },

    open: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    close: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    high: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    low: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    volume: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    marketCap: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    apiId: {
        type: Sequelize.STRING,
        allowNull: true
    },

    symbol: {
        type: Sequelize.STRING,
        allowNull: true
    },

    coinType: {
        type: Sequelize.STRING,
        allowNull: true
    },

    rank: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

});


module.exports = Coin;