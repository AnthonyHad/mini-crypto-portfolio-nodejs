const Coin = require('../../models/coin');
const { Op } = require('sequelize');

Coin.findAll({
    raw: true,
    where: {
        rank: {
            [Op.between]: [1, 10]
        }
    }
})
.then(coins => {
    console.log(coins);

});       