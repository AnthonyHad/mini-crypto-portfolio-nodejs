const path = require('path');

const express = require('express');

const investmentController = require('../controllers/investment');

const router = express.Router();


// Displaying Investments 
router.get('/investments', investmentController.getInvestments);

// Adding an Investment 
router.get('/new-investment', investmentController.getAddInvestment);
router.post('/new-investment', investmentController.postAddInvestment);


//Editing an Investment 
router.get('/edit-investment/:investmentId', investmentController.getEditInvestment);
router.post('/edit-investment/:investmentId', investmentController.postEditInvestment);

//Deleting an investment
router.post('/delete-investment', investmentController.postDeleteInvestment);

module.exports = router;