const express = require('express');
const path = require('path');

const homePageController = require('../controllers/homeController');
const router = express.Router();

router.get('/',homePageController.getHomePage);
router.get('/aboutus',homePageController.getAboutUS);

module.exports = router;