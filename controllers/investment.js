const Coin = require('../models/coin');
const Investment = require('../models/investment');

exports.getInvestments = (req, res, next) => {
    req.user
        .getInvestments({include: ["coin"]})
        .then(investments => {
            userInvestments = investmentAggregation(investments)
            res.render('investments', {
                names: userInvestments,
                investments: investments,
                pageTitle: 'Your Investments',
                path: '/investments'
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getShowInvestments = (req, res, next) => {
const coinId = req.params.coinId
req.user
    .getInvestments({include: ["coin"], where: {coinId: coinId}})
    .then(investments => {
        res.render('show-investments', {
            investments: investments,
            pageTitle: 'Transactions',
            path: '/investments'
        })
    .catch(err => {
        console.log(err)
        })
    })

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
      .catch(err => {
          console.log(err)
        })
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


exports.postDeleteInvestment = (req, res, next) => {
    const invId = req.body.investmentId;
    Investment.findByPk(invId)
        .then(investment => {
            return investment.destroy()
        }).then( result => {
            console.log("Deleted Investment")
            res.redirect('/investments')
        }).catch(err => console.log(err))
}



const zip = (a, b) => a.map((k, i) => [k, b[i]]);
const mapMultiplication = (a) => {
    let j = 0;
    let k = 1;
    sum = 0;
    for(i = 0 ; i< a.length ; i++) {
        sum += a[i][j] * a[i][k]

    }
    return sum
}

investmentAggregation = (investments) => {
    coinNames = [];
    userInvestments = {};
    investments.forEach(investment => {
        coinNames.push(investment.coin.name)
    });
    singularNames = [... new Set(coinNames)];
    singularNames.forEach(name => {
        userInvestments[name] = {}
    })
   
    for (const [key, value] of Object.entries(userInvestments)) {
        value.price = [];
        value.quantity = [];
        value.investmentId = [];
        investments.forEach(investment => {
            if(investment.coin.name === key) {
                value.investmentId.push(investment.id)
                value.price.push(investment.coinPrice)
                value.quantity.push(investment.quantity)
                value.closingPrice = investment.coin.close
                value.symbol = investment.coin.symbol
                value.totalInvested = mapMultiplication(zip(value.price, value.quantity))
                value.coinId = investment.coin.id
            }
        })

    }
    // console.log(userInvestments);
   return userInvestments
};