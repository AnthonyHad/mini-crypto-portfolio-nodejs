const Coin = require('../models/coin');


exports.getCoins = (req, res, next) => {
 
            res.render('coins', {
                pageTitle: 'Top 10 Coins',
                path: '/coins'
            });
};


// exports.getCoins = (req, res, next) => {
//     Coin
//         .findAll()
//         .then(coins => {
//             res.render('views/coins', {
//                 coins: coins,
//                 pageTitle: 'Top 10 Coins',
//                 path: '/coins'
//             });
//         })
//         .catch( err => {
//             console.log(err);
//         })
// };