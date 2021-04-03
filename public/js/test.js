const Coin = require('../../models/coin');
const Investment = require('../../models/investment');
const User = require('../../models/user');
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

// Coin.findAll({
//     raw:true,
//     attributes: ['id', 'name']
// }).then(coins => {
//     coins.forEach(coin => {
//         console.log(typeof coin.id)
//     })
    
    
// })

User.findByPk(1)
.then(user => user.getInvestments())
.then(investments => console.log(investments))
.catch(err => console.log(err))
// .then(investments => console.log(investments));