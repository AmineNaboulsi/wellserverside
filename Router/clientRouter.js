const express = require('express');
const router = express.Router();
const clientController = require('../Controller/clientController');

router.get('/getclient', clientController.getclient);

module.exports = router;