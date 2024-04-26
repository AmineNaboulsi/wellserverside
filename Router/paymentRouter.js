const express = require('express');
const router = express.Router();
const paymentController = require('../Controller/paymentController');

router.get('/getpayment', paymentController.getpayment);

module.exports = router;