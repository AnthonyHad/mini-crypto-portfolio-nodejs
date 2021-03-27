const Coin = require('../models/coin');
const Investment = require('../models/investment');

exports.getInvestments = (req, res, next) => {
    req.user
        .getInvestments()
        .then(investments => {
            res.render('investments', {
                investments: investments,
                pageTitle: 'Your Investments',
                path: '/investments'
            })
        });
}

exports.getAddInvestments = (req , res, next) => {
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