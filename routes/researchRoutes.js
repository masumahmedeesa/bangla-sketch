const express = require('express');

const researchController = require('../controllers/researchController');
const router = express.Router();

router.get('/researchIndex',researchController.getResearchIndex);
// router.get('/researchIndiData/:researchId',researchController.getResearchIndiData);
router.get('/researchIndiData',researchController.getResearchIndiData);
router.get('/researchIndiMeta',researchController.getResearchIndiMeta);


module.exports = router;