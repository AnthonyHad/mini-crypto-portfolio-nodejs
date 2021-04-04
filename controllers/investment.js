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
  
//   exports.postEditProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     const updatedTitle = req.body.title;
//     const updatedPrice = req.body.price;
//     const updatedImageUrl = req.body.imageUrl;
//     const updatedDesc = req.body.description;
//     Product.findByPk(prodId)
//       .then(product => {
//         product.title = updatedTitle;
//         product.price = updatedPrice;
//         product.description = updatedDesc;
//         product.imageUrl = updatedImageUrl;
//          return product.save()
//       })
//       .then(result => {
//         console.log('UPDATED PRODUCT')
//         res.redirect('/admin/products');
//       } )
//       .catch(err => console.log(err)) // thanks to the return above we can catch  errors for the both of the promises above
    // const updatedProduct = new Product(
    //   prodId,
    //   updatedTitle,
    //   updatedImageUrl,
    //   updatedDesc,
    //   updatedPrice
    // );
    // updatedProduct.save();
    // res.redirect('/admin/products'); if we leave this here we wont see the updates directly due to the async JS 
//   };