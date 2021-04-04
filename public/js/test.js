const Coin = require('../../models/coin');
const Investment = require('../../models/investment');
const User = require('../../models/user');
const { Op } = require('sequelize');


 Investment.findAll()
    .then(investments => {
        investments.forEach(investment => {
            console.log(investment)
        })
    })


// User.findByPk(1)
// .then(user => user.getInvestments())
// .then(investments => console.log(investments))
// .catch(err => console.log(err))
// // .then(investments => console.log(investments));


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