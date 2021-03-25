const path = require('path');

const express = require('express');


const coinController = require('../controllers/coin');

const router = express.Router();


//coin index (top 10)
router.get('/coins', coinController.getCoins);


module.exports = router;