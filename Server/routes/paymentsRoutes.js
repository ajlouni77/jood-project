const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentsController");

router.post("/payment", paymentController.processPayment);

module.exports = router;
