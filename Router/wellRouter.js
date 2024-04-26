const express = require('express');
const router = express.Router();
const wellController = require('../Controller/wellController');

router.get('/getwells', wellController.getwells)

module.exports = router;