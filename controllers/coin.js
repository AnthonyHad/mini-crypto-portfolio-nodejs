const Coin = require('../models/coin');
const { Op } = require('sequelize');


exports.getCoins = (req, res, next) => {
    Coin.findAll({
        raw:true, 
        where: {
            rank: {
                [Op.between]: [1, 10]
            }
        }
    })
    .then(coins => {
        res.render('coins', {
            coins: coins,
            pageTitle: 'Top 10 Coins',
            path: '/coins'
        });

    })         
};
