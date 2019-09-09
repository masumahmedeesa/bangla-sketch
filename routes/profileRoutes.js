const express = require('express');

const profileController = require('../controllers/profileController');
const router = express.Router();

router.get('/profileIndex', profileController.getProfileIndex);
router.get('/profileIndividual', profileController.getProfileIndividual);

module.exports = router;