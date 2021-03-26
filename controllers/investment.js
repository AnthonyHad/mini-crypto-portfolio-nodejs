const Investment = require('../models/investment');

exports.getInvestments = (req, res, next) => {
    req.user
        .getInvestments()
        .then(investments => {
            res.render('investments', {
                pageTitle: 'Your Investments',
                path: '/investments'
            })
        });
}