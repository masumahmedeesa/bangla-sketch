const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/adminPage",adminController.getAdminPage);
router.get("/add-profile",adminController.getAddProfile);

module.exports = router;
