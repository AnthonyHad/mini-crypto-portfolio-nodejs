const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');


//Models 

const Coin = require('./models/coin');
const Investment = require('./models/investment');
const User = require('./models/user');

//using express
const app = express();


// Setting Views
app.set('view engine', 'ejs');
app.set('views', 'views');


// Routes
const coinRoutes = require('./routes/coin');
const investmentRoutes = require('./routes/investment');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => { 
    User.findByPk(1)
      .then(user => {
        req.user = user; 
        next();
      })
      .catch(err => console.log(err));
  });


app.use(coinRoutes);
app.use(investmentRoutes);


//Associations
// Coin.hasMany(Investment);
Coin.hasMany(Investment);
User.hasMany(Investment);
Investment.belongsTo(User);
Investment.belongsTo(Coin);
// User.belongsToMany(Coin, {through: Investment});



sequelize
    .sync()
    .then( result => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
          return User.create({ name: 'Anthony', email: 'anthony@crypto.com' });
        }
        return user;
      })
      .then(user => {
          app.listen(3000);
      })
    .catch(err => {
        console.log(err);
    })



  
    
