const express = require('express');
const router = express.Router();
const taskController = require('../Controller/taskController');

router.get('/getasks', taskController.getasks)

module.exports = router;