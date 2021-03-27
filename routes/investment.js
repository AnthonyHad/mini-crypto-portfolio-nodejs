const path = require('path');

const express = require('express');

const investmentController = require('../controllers/investment');

const router = express.Router();

router.get('/investments', investmentController.getInvestments);
router.get('/new-investment', investmentController.getAddInvestments);

module.exports = router;