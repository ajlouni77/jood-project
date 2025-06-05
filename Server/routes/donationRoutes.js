const express = require("express");
const router = express.Router();
const { getTotalDonations } = require("../controllers/donationController");

router.get("/total-donations", getTotalDonations);
const { getDailyDonations } = require("../controllers/donationController");

router.get("/daily-donations", getDailyDonations);
module.exports = router;
