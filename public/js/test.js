const Coin = require('../../models/coin');
const Investment = require('../../models/investment');
const { Op } = require('sequelize');

// Coin.findAll({
//     raw: true,
//     where: {
//         rank: {
//             [Op.between]: [1, 10]
//         }
//     }
// })
// .then(coins => {
//     console.log(coins);

// });       

// const coins = Investment.findAll({
//     raw: true, 
//     include: {
//         model: Coin,
//         attributes: ['id','name']
//     }
// })

// console.log(coins);

Coin.findAll({
    raw:true,
    attributes: ['id', 'name']
}).then(coins => {
    console.log(coins)
})
