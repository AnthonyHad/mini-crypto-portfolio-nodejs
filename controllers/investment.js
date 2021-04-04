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


exports.getEditInvestment = (req, res, next) => {
    const invId = req.params.investmentId;
    req.user
      .getInvestments({where: { id: invId }, include: ['coin'] })
      .then(investments => {
        const investment = investments[0];
        if (!investment) {
          return res.redirect('/investments');
        }
        res.render('edit-investment', {
          pageTitle: 'Edit Investment',
          path: '/edit-investment',
          investment: investment
        });
      })
      .catch(err => console.log(err));
  };

exports.postEditInvestment = (req, res, next) => {
    const invId = req.body.investmentId
    const coinId = req.body.name
    const updatedPrice = req.body.coinPrice
    const updatedQuantity = req.body.quantity
    Investment.findByPk(invId)
      .then(investment => {
          investment.coinId = coinId;
          investment.coinPrice = updatedPrice;
          investment.quantity = updatedQuantity;
          return investment.save()
      })
      .then(result => {
          console.log('Updated the investment')
          res.redirect('/investments')
      })
      .catch(err => console.log(err))
}
