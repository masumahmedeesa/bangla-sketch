const express = require('express');
const path = require('path');

const apiController = require('../controllers/apiController');
const router = express.Router();

router.get('/api',apiController.getApiPage);

module.exports = router;