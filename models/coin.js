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
        allowNull: false
    },

    open: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    close: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    high: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    low: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    volume: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    marketCap: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    apiId: {
        type: Sequelize.STRING,
        allowNull: false
    },

    symbol: {
        type: Sequelize.STRING,
        allowNull: false
    },

    coinType: {
        type: Sequelize.STRING,
        allowNull: false
    },

    rank: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

});


module.exports = Coin;