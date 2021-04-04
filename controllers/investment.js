const Coin = require('../models/coin');
const Investment = require('../models/investment');

exports.getInvestments = (req, res, next) => {
    req.user
        .getInvestments({include: ["coin"]})
        .then(investments => {
            res.render('investments', {
                investments: investments,
                pageTitle: 'Your Investments',
                path: '/investments'
            })
        });
}

exports.getAddInvestment = (req , res, next) => {
    Coin.findAll({
        raw: true,
        attributes: ['id', 'name']
    })
    .then(coins => {
        res.render('new-investment', {
            coins: coins,
            pageTitle: 'New Investment',
            path: '/edit-investment',
            editing: false,
        })
    })
    .catch(err => {
        console.log(err)
    })
}

exports.postAddInvestment = (req, res, next) => {
    const coinId = req.body.name
    const coinPrice = req.body.coinPrice
    const quantity = req.body.quantity
    req.user
        .createInvestment({
            coinId: coinId,
            coinPrice: coinPrice,
            quantity: quantity
        })
        .then(result => {
            console.log("Investment Successfully added !")
            res.redirect('investments')
        })
        .catch(err => {
            console.log(err);
        })

}