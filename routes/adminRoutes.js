const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/adminPage",adminController.getAdminPage);
router.get("/add-profile",adminController.getAddProfile);
router.get('/addResearch', adminController.getAddResearch);

router.get('/editResearch/:researchId', adminController.getEditResearch);
router.post('/postResearch', adminController.postResearch);
router.post('/editResearch', adminController.postEditResearch);
router.post('/deleteResearch', adminController.deleteResearch);

module.exports = router;
